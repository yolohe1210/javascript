# Overview

As a software engineer, my goal for this project was to deepen my practical understanding of modern client-side JavaScript, specifically focusing on DOM manipulation, event handling, and native ES6 array methods such as `map()`, `filter()`, and `forEach()`. Furthermore, I wanted to explore how data persistence can be seamlessly achieved on the client side using browser storage APIs.

To accomplish this, I developed a fully functional, browser-based **To-Do List Application**. The software allows users to dynamically add new tasks, mark tasks as completed, delete individual items, clear all completed tasks at once, and filter tasks by their status ("All", "Active", "Completed"). It also features a real-time counter that tracks remaining incomplete tasks and uses `localStorage` to ensure user data persists across browser sessions.

My primary purpose in writing this software was to bridge the gap between theoretical JavaScript concepts (such as asynchronous callbacks, higher-order array functions, and dynamic element creation) and a tangible, user-facing web utility. 

[Software Demo Video](http://youtube.link.goes.here)

# Development Environment

* **Development Tools**: 
  * Visual Studio Code as the primary source code editor.
  * Google Chrome Browser (along with Chrome Developer Tools) for testing, DOM inspection, and debugging.
  * Git and GitHub for version control and code management.
* **Programming Languages & Technologies**: 
  * **HTML5** for structuring the web application layout.
  * **CSS3** for styling the user interface, incorporating flexbox layouts and responsive design classes.
  * **Vanilla JavaScript (ES6+)** for implementing core application logic, event listeners, array methods (`filter`, `map`, `forEach`), and the Web Storage API (`localStorage`). No external third-party frameworks or libraries were required, allowing for a deep focus on core language syntax and DOM manipulation.

# Useful Websites

- [MDN Web Docs - JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
- [MDN Web Docs - Using the Web Storage API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API)
- [JavaScript.info - Array Methods](https://javascript.info/array-methods)

# Future Work

- Implement task priority levels (High, Medium, Low) with custom color-coded visual badges.
- Add a search bar feature to allow users to quickly filter tasks by keyword.
- Implement local edit functionality so users can double-click or click an edit button to modify existing task descriptions directly in the interface.