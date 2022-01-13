import './style.css';
import format from 'date-fns/format';
import add from 'date-fns/add';
import isWithinInterval from 'date-fns/isWithinInterval';
import set from 'date-fns/set';
import compareAsc from 'date-fns/compareAsc';

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
    allTasks.sort(function(a, b) {
        return compareAsc(a.date, b.date);
    });
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

let todayArray = [];
let tomorrowArray = [];
let weekArray = [];
let monthArray = [];

const clearArrays = () => {
    todayArray = [];
    tomorrowArray = [];
    weekArray = [];
    monthArray = [];
};

const displayToday = () => {
    clearArrays();
    allTasks.forEach(task => {
        if (format(task.date, 'dd-MM-yyyy') === format(new Date(), 'dd-MM-yyyy')) {
            todayArray.push(task);
        }
    });
    displayTasks(todayArray);
};

const displayTomorrow = () => {
    clearArrays();
    let tomorrow = add(new Date(), {days: 1});
    allTasks.forEach(task => {
        if (format(task.date, 'dd-MM-yyyy') === format(tomorrow, 'dd-MM-yyyy')) {
            tomorrowArray.push(task);
        }
    });
    displayTasks(tomorrowArray);
}; 

const displayWeek = () => {
    clearArrays();
    let week = add(new Date(), {weeks: 1});
    allTasks.forEach(task => {
        if (isWithinInterval(task.date, {
            start: set(new Date(), {hours: 0, minutes: 0, seconds: 0}),
            end: week
        })) {
            weekArray.push(task);
        }
    });
    displayTasks(weekArray);
}; 

const displayMonth = () => {
    clearArrays();
    let month = add(new Date(), {months: 1});
    allTasks.forEach(task => {
        if (isWithinInterval(task.date, {
            start: set(new Date(), {hours: 0, minutes: 0, seconds: 0}),
            end: month
        })) {
            monthArray.push(task);
        }
    });
    displayTasks(monthArray);
};

const displayAll = () => {
    clearArrays();
    displayTasks(allTasks);
};

const displayTasks = (array) => {
    while (listContainer.lastChild && listContainer.lastChild.className === 'list-task') {
        listContainer.lastChild.remove();
    }
    let number = 0;
    array.forEach(task => {
        const deleteTask = (e) => {
            e.target.parentNode.remove();
            allTasks.splice(allTasks.indexOf(task), 1);
        };
        const markTask = (e) => {
            e.target.parentNode.style.backgroundColor = 'rgb(144, 255, 53)';
            e.target.parentNode.style.color = 'rgba(0, 0, 0, 0.6)';
            order.style.textDecoration = 'line-through';
            taskText.style.textDecoration = 'line-through';
            priority.style.textDecoration = 'line-through';
            date.style.textDecoration = 'line-through';
            edit.hidden = true;
            mark.hidden = true;
            deleteTaskBtn.style.backgroundColor = 'rgb(127, 177, 28)';
        };

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
        deleteTaskBtn.addEventListener('click', deleteTask);
        taskContainer.appendChild(deleteTaskBtn);
        const mark = document.createElement('button');
        mark.classList.add('mark');
        mark.textContent = '✅';
        mark.addEventListener('click', markTask);
        taskContainer.appendChild(mark);
        listContainer.appendChild(taskContainer);
    });
};

// Page initiate

const pageInitiate = () => {
    mainButtons.newTask.addEventListener('click', displayForm);
    mainButtons.newProject.addEventListener('click', displayForm);
    mainButtons.today.addEventListener('click', displayToday);
    mainButtons.tomorrow.addEventListener('click', displayTomorrow);
    mainButtons.thisWeek.addEventListener('click', displayWeek);
    mainButtons.thisMonth.addEventListener('click', displayMonth);
    mainButtons.allTasks.addEventListener('click', displayAll);
    formButtons.close.forEach(item => item.addEventListener('click', closeForm));
    formButtons.createTask.addEventListener('click', createTaskBtn);
    formInputs.date.valueAsDate = new Date();
};

pageInitiate();