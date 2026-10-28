// 1. Initialize data from localStorage or fallback to empty array
let tasks = JSON.parse(localStorage.getItem('my_tasks')) || [];
let currentFilter = 'all';

const taskInput = document.getElementById('task-input');
const addBtn = document.getElementById('add-btn');
const taskList = document.getElementById('task-list');
const filterBtns = document.querySelectorAll('.filter-btn');
const taskCounter = document.getElementById('task-counter');
const clearBtn = document.getElementById('clear-btn');

function saveTasks() {
  localStorage.setItem('my_tasks', JSON.stringify(tasks));
}

// 2. Add a new task
function addTask() {
  const text = taskInput.value.trim();
  if (!text) return alert('Please enter a task description!');

  const newTask = {
    id: Date.now(),
    text: text,
    completed: false
  };

  tasks.push(newTask);
  saveTasks();
  taskInput.value = '';
  renderTasks();
}

// 3. Toggle task completion status
function toggleTask(id) {
  tasks = tasks.map(task => 
    task.id === id ? { ...task, completed: !task.completed } : task
  );
  saveTasks();
  renderTasks();
}

// 4. Delete an individual task 
function deleteTask(id) {
  tasks = tasks.filter(task => task.id !== id);
  saveTasks();
  renderTasks();
}

// 5. Clear all completed tasks 
function clearCompleted() {
  tasks = tasks.filter(task => !task.completed);
  saveTasks();
  renderTasks();
}

// 6. Update active task counter 
function updateCounter() {
  const activeCount = tasks.filter(task => !task.completed).length;
  taskCounter.textContent = `${activeCount} item${activeCount === 1 ? '' : 's'} left`;
}

// 7. Render task list
function renderTasks() {
  taskList.innerHTML = '';

  const filteredTasks = tasks.filter(task => {
    if (currentFilter === 'active') return !task.completed;
    if (currentFilter === 'completed') return task.completed;
    return true; // 'all'
  });
  
  filteredTasks.forEach(task => {
    const li = document.createElement('li');
    li.className = `task-item ${task.completed ? 'completed' : ''}`;
    
    li.innerHTML = `
      <span>${task.text}</span>
      <div class="btn-group">
        <button onclick="toggleTask(${task.id})">${task.completed ? 'Undo' : 'Done'}</button>
        <button class="delete-btn" onclick="deleteTask(${task.id})">Delete</button>
      </div>
    `;
    taskList.appendChild(li);
  });

  updateCounter();
}

// 8. Event listeners bindings
addBtn.addEventListener('click', addTask);
taskInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') addTask();
});

clearBtn.addEventListener('click', clearCompleted);

filterBtns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    filterBtns.forEach(b => b.classList.remove('active'));
    e.target.classList.add('active');
    currentFilter = e.target.dataset.filter;
    renderTasks();
  });
});

renderTasks();