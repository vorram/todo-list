import './style.css';
import format from 'date-fns/format'

// Selectors

const mainButtons = {
    newTask: document.querySelector('#new-task'),
    newProject: document.querySelector('#new-project'),
    today: document.querySelector('#menu-today'),
    tomorrow: document.querySelector('#menu-tomorrow'),
    thisWeek: document.querySelector('#menu-week'),
    thisMonth: document.querySelector('#menu-month'),
    allTasks: document.querySelector('#menu-all'),
};

const formButtons = {
    createTask: document.querySelector('#create-task'),
    createProject: document.querySelector('#create-project'),
    close: document.querySelectorAll('.close'),
};

const formInputs = {
    task: document.querySelector('#task'),
    priority: document.querySelector('#priority'),
    date: document.querySelector('#due-date'),
    project: document.querySelector('#assign-project'),
    notes: document.querySelector('#notes'),
    projectName: document.querySelector('#project'),
};

const taskButtons = {
    edit: document.querySelectorAll('.edit'),
    delete: document.querySelectorAll('.delete'),
    mark: document.querySelectorAll('.mark'),
};

const bgFilter = document.querySelector('.bg-filter');
const newTaskForm = document.querySelector('.new-task-form');
const newProjectForm = document.querySelector('.new-project-form');
const listContainer = document.querySelector('.list-container');

// Task creation and storage

const allTasks = [];

class Task {
    constructor(task, priority, date, project, notes) {
        this.task = task;
        this.priority = priority;
        this.date = date;
        this.project = project;
        this.notes = notes;
    }
};

const createTask = () => {
    const newTask = new Task(formInputs.task.value, formInputs.priority.value, formInputs.date.valueAsDate, formInputs.project.value, formInputs.notes.value);
    allTasks.push(newTask);
};

const clearInputs = () => {
    formInputs.task.value = '';
    formInputs.priority.value = 'Normal';
    formInputs.date.valueAsDate = new Date();
    formInputs.project.value = 'default';
    formInputs.notes.value = '';
    formInputs.projectName.value = '';
};

// Display

const displayForm = (e) => {
    bgFilter.style.display = 'block';
    if (e.target.id === 'new-task') {
        newTaskForm.style.display = 'block';
    }
    if (e.target.id === 'new-project') {
        newProjectForm.style.display = 'block';
    }
};

const createTaskBtn = () => {
    createTask();
    displayTasks(allTasks);
    closeForm();
};

const closeForm = () => {
    bgFilter.style.display = 'none';
    newTaskForm.style.display = 'none';
    newProjectForm.style.display = 'none';
    clearInputs();
};

const displayTasks = (array) => {
    while (listContainer.lastChild && listContainer.lastChild.className === 'list-task') {
        listContainer.lastChild.remove();
    }
    let number = 0;
    array.forEach(task => {
        number++;
        const taskContainer = document.createElement('div');
        taskContainer.classList.add('list-task');
        const order = document.createElement('div');
        order.textContent = number.toString();
        taskContainer.appendChild(order);
        const taskText = document.createElement('div');
        taskText.textContent = task.task;
        taskContainer.appendChild(taskText);
        const priority = document.createElement('div');
        priority.textContent = task.priority;
        taskContainer.appendChild(priority);
        const date = document.createElement('div');
        date.textContent = format(task.date, 'dd-MM-yyyy');
        taskContainer.appendChild(date);
        const edit = document.createElement('button');
        edit.textContent = '📝';
//        edit.addEventListener('click', editTask);
        taskContainer.appendChild(edit);
        const deleteTaskBtn = document.createElement('button');
        deleteTaskBtn.textContent = '❌';
//        deleteTaskBtn.addEventListener('click', deleteTask);
        taskContainer.appendChild(deleteTaskBtn);
        const mark = document.createElement('button');
        mark.classList.add('mark');
        mark.textContent = '✅';
//        mark.addEventListener('click', markTask);
        taskContainer.appendChild(mark);
        listContainer.appendChild(taskContainer);
    });
};

// Page initiate

const pageInitiate = () => {
    mainButtons.newTask.addEventListener('click', displayForm);
    mainButtons.newProject.addEventListener('click', displayForm);
    formButtons.close.forEach(item => item.addEventListener('click', closeForm));
    formButtons.createTask.addEventListener('click', createTaskBtn);
    formInputs.date.valueAsDate = new Date();
};

pageInitiate();