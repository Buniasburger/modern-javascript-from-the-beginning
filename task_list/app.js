// Define UI vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('ul.collection');
const clearBtn = document.querySelector('a.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event listeners
loadEventListeners();

// Load all event listeners
function loadEventListeners() {
    // DOM load event
    document.addEventListener('DOMContentLoaded', () => getTasks());
    // Add task event
    form.addEventListener('submit', e => addTask(e));
    // Remove task event
    taskList.addEventListener('click', e => removeTask(e));
    // Clear tasks event
    clearBtn.addEventListener('click', () => clearTasks());
    // Filter tasks event
    filter.addEventListener('keyup', e => filterTasks(e));
}

// Add task
function addTask(e) {
    if (taskInput.value === '') {
        alert('Add a task!');
    }

    // Create li element
    const li = document.createElement('li');
    // Add class
    li.className = 'collection-item';
    // Create text node and append to the li
    li.appendChild(document.createTextNode(taskInput.value));
    // Create link element
    const link = document.createElement('a');
    // Add class
    link.className = 'delete-item secondary-content';
    // Add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>';
    // Append link to li
    li.appendChild(link);

    // Append li to ul
    taskList.appendChild(li);

    // Store in local storage
    storeTaskInLocalStorage(taskInput.value);

    // Clear input
    taskInput.value = '';
    e.preventDefault();
}

// Remove task
function removeTask(e) {
    if (e.target.parentElement.classList.contains('delete-item') && confirm('Are you sure?')) {
        e.target.parentElement.parentElement.remove();

        // Remove from ls
        removeTaskFromLs(e.target.parentElement.parentElement);
    }
}

// Clear tasks
function clearTasks() {
    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }

    clearTasksFromLs();
}

// Filter tasks
function filterTasks(e) {
    const text = e.target.value.toLowerCase();
    document.querySelectorAll('li.collection-item').forEach(function (task) {
        const item = task.firstChild.textContent;

        if (item.toLowerCase().indexOf(text) !== -1) {
            task.style.display = 'block';
        } else {
            task.style.display = 'none';
        }
    });
}

function storeTaskInLocalStorage(task) {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Get tasks from ls
function getTasks() {
    const tasks = localStorage.getItem('tasks');
    console.log(tasks);
    if (tasks !== null) {
        JSON.parse(tasks).forEach(function (task) {
            // Create li element
            const li = document.createElement('li');
            // Add class
            li.className = 'collection-item';
            // Create text node and append to the li
            li.appendChild(document.createTextNode(task));
            // Create link element
            const link = document.createElement('a');
            // Add class
            link.className = 'delete-item secondary-content';
            // Add icon html
            link.innerHTML = '<i class="fa fa-remove"></i>';
            // Append link to li
            li.appendChild(link);

            // Append li to ul
            taskList.appendChild(li);
        })
    }
}

// Remove from local storage
function removeTaskFromLs(taskItem) {
    let tasks = localStorage.getItem('tasks');

    if (tasks !== null) {
        tasks = JSON.parse(tasks)
        tasks.forEach(function (task, index) {
            if (taskItem.textContent === task) {
                tasks.splice(index, 1);
            }
        })
    }

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Clear tasks from LS
function clearTasksFromLs() {
    localStorage.clear();
}