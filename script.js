const taskList = document.getElementById('task-list');
const newTaskInput = document.getElementById('new-task');
const addTaskButton = document.getElementById('add-task');

addTaskButton.addEventListener('click', function() {
  const newTask = newTaskInput.value.trim();

  if (newTask) {
    const listItem = document.createElement('li');
    const checkbox = document.createElement('input');
    const taskText = document.createElement('span');
    const deleteButton = document.createElement('button');

    checkbox.type = 'checkbox';
    taskText.innerText = newTask;
    deleteButton.innerText = 'X';

    listItem.appendChild(checkbox);
    listItem.appendChild(taskText);
    listItem.appendChild(deleteButton);

    taskList.appendChild(listItem);

    newTaskInput.value = '';

    // Add event listener for checkbox
    checkbox.addEventListener('change', function() {
      listItem.classList.toggle('completed');
    });

    // Add event listener for delete button
    deleteButton.addEventListener('click', function() {
      taskList.removeChild(listItem);
    });
  }
});