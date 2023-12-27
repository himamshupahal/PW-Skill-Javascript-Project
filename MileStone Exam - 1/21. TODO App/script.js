const AddTaskBtn = document.getElementById('add-task-btn');
const TaskList = document.getElementById('task-list');

AddTaskBtn.addEventListener('click', () => {
    let UserTask = document.getElementById('user-task').value;

    if (UserTask === '') {
        alert('Please enter a task.');
        return;
    }
    const li = document.createElement('li');
    li.innerText = UserTask;
    TaskList.appendChild(li);
    UserTask = '';
}
)