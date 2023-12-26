// Check if the browser supports service workers
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js')
        .then(registration => {
            console.log('Service Worker registered with scope:', registration.scope);
        })
        .catch(error => {
            console.error('Service Worker registration failed:', error);
        });
}

// Dummy data for initial tasks
const initialTasks = [
    'Learn PWA basics',
    'Build a simple todo app',
    'Explore service workers',
];

// Get todoList element
const todoList = document.getElementById('todoList');

// Initialize tasks from dummy data
initialTasks.forEach(task => addTaskElement(task));

// Function to add a new task
function addTask() {
    const newTaskInput = document.getElementById('newTask');
    const newTaskText = newTaskInput.value.trim();

    if (newTaskText !== '') {
        addTaskElement(newTaskText);
        newTaskInput.value = '';
    }
}

// Function to create a new task element
function addTaskElement(taskText) {
    const taskElement = document.createElement('div');
    taskElement.className = 'task';
    taskElement.innerHTML = `
        <span>${taskText}</span>
        <button onclick="removeTask(this)">Remove</button>
    `;
    todoList.appendChild(taskElement);
}

// Function to remove a task
function removeTask(buttonElement) {
    const taskElement = buttonElement.parentNode;
    todoList.removeChild(taskElement);
}
