
let tasks = [];

const addtaskbtn = document.getElementById('addtaskbtn');
const input = document.getElementById('input');
let iseediting = false
let editingValue = null

addtaskbtn.addEventListener('click', function () {
    addTask()
})

input.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        addTask()
    }
})

function addTask() {
    let inputvalue = input.value.trim();
    if (editingValue) {
        const index = tasks.indexOf(editingValue);
        if (index !== -1) {
            tasks.splice(index, 1, inputvalue)
            editingValue = null
        }
    }
    else {
        if (inputvalue !== '') {
            tasks.unshift(inputvalue);
        }
    }
    renderTasks();
    input.value = '';
}

function renderTasks() {
    const taskContainer = document.getElementById('Taskcontainer');
    taskContainer.innerHTML = ''; // Clear previous content

    const ul = document.createElement('ul');
    ul.classList.add('ul')

    tasks && tasks?.forEach(task => {
        const listItems = document.createElement('li');
        listItems.classList.add('listItems')
        listItems.innerText = task;
        const spanelements = document.createElement('span');
        const deleteBtn = document.createElement('button');

        const editBtn = document.createElement('button');
        editBtn.classList.add('editBtn');
        editBtn.innerText = 'Edit'
        spanelements.appendChild(editBtn)
        editBtn.addEventListener('click', function () {
            editTask(task)
            renderTasks()
        })

        deleteBtn.addEventListener('click', function () {
            deleteTask(task)
            renderTasks()

        })
        deleteBtn.classList.add('deleteBtn')
        deleteBtn.innerText = 'Delete'
        spanelements.appendChild(deleteBtn)
        listItems.appendChild(spanelements)
        ul.appendChild(listItems);
    });
    taskContainer.appendChild(ul);
}

renderTasks();

function deleteTask(task) {
    const updatedTask = tasks.filter(element => element !== task)
    console.log(tasks)
    console.log(updatedTask)
    tasks = updatedTask
}

function editTask(task) {
    input.value = task
    input.focus()
    editingValue = tasks.find(element => element === task);
    console.log(editingValue)
}

function handlekeydown(event) {
    if (event.key === 'Enter') {
        addTask()
    }
}
