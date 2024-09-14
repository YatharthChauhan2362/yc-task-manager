document.addEventListener('DOMContentLoaded', loadTasks);

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const taskList = document.getElementById('taskList');
        const taskItem = document.createElement('li');
        taskItem.innerHTML = `${taskText} <button onclick="removeTask(this)">Delete</button>`;
        taskList.appendChild(taskItem);
        saveTasks();
        taskInput.value = '';
    }
}

function removeTask(button) {
    const taskItem = button.parentElement;
    taskItem.remove();
    saveTasks();
}

function clearTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
    saveTasks();
}

function saveTasks() {
    const tasks = [];
    const taskItems = document.querySelectorAll('#taskList li');
    taskItems.forEach(item => {
        tasks.push(item.textContent.replace('Delete', '').trim());
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
    const savedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (savedTasks) {
        const taskList = document.getElementById('taskList');
        savedTasks.forEach(taskText => {
            const taskItem = document.createElement('li');
            taskItem.innerHTML = `${taskText} <button onclick="removeTask(this)">Delete</button>`;
            taskList.appendChild(taskItem);
        });
    }
}