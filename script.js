let storage = localStorage.getItem('mySavedTasks')


const taskInput = document.getElementById('task-input');
const taskSubmit = document.getElementById('task-submit');
const taskList = document.getElementById('task-list');
const completedTaskList = document.getElementById('task-list-complete')

taskSubmit.addEventListener('click', function() {
    const taskText = taskInput.value.trim();

    if (taskText !== '' && taskInput.value !== 'List Full' && taskList.children.length < 5) {
        const li = document.createElement('li');
        li.addEventListener('click', function() {
            taskList.removeChild(li);
            completedTaskList.appendChild(li);
        }); 
        li.textContent = taskText;
        taskList.appendChild(li);
        taskInput.value = '';
    }
    else if (taskList.children.length == 5) {
        taskInput.placeholder = 'List Full'
    }
    else {
        taskInput.placeholder = 'Invalid Input'
    }

});

taskInput.addEventListener('keypress', function(e) {

  if (e.key === 'Enter') {
    taskSubmit.click();
  }

});