const taskInput = document.getElementById('task-input');
const taskSubmit = document.getElementById('task-submit');
const taskList = document.getElementById('task-list');
const completedTaskList = document.getElementById('task-list-complete');
const daySelected = document.getElementById('day-select')
const currentDate = new Date()

let savedCompletedTasks = JSON.parse(localStorage.getItem('completedTasks')) || [];

savedCompletedTasks.forEach(function(taskText) {
    const li = document.createElement('li');
    li.textContent = taskText;
    completedTaskList.appendChild(li);
});

taskSubmit.addEventListener('click', function() {
    const taskText = taskInput.value.trim();
    taskInput.placeholder = '';

    const newTask = {
        text: taskText,
        day: selectedDay,
        year: test,
        completed: false,
    };

    if (taskText !== '' && taskList.children.length < 5) {
        const li = document.createElement('li');
        li.textContent = taskText;
        
        li.addEventListener('click', function() {
            taskList.removeChild(li);
            completedTaskList.appendChild(li);
            
            savedCompletedTasks.push(taskText);
            localStorage.setItem('completedTasks', JSON.stringify(savedCompletedTasks));
        }); 
        
        taskList.appendChild(li);
        taskInput.value = '';
    } 
    else if (taskList.children.length >= 5) {
        taskInput.value = '';
        taskInput.placeholder = 'List Full';
    } 
    else {
        taskInput.placeholder = 'Invalid Input';
    }
});

taskInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        taskSubmit.click();
    }
});

taskInput.addEventListener('focus', function() {
    taskInput.placeholder = '';
});