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
    if(taskInput.value === '') {
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

    // Clear input
    taskInput.value = '';
    e.preventDefault();
}

// Remove task
function removeTask(e) {
    if(e.target.parentElement.classList.contains('delete-item') && confirm('Are you sure?')) {
        e.target.parentElement.parentElement.remove();
    }
}

// Clear tasks
function clearTasks() {
    while(taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }
}

// Filter tasks
function filterTasks(e) {
    const text = e.target.value.toLowerCase();
    document.querySelectorAll('li.collection-item').forEach(function(task) {
        const item = task.firstChild.textContent;

        if (item.toLowerCase().indexOf(text) !== -1) {
            task.style.display = 'block';
        } else {
            task.style.display = 'none';
        }
    });
}