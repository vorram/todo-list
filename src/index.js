import './style.css';

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

const taskButtons = {
    edit: document.querySelectorAll('.edit'),
    delete: document.querySelectorAll('.delete'),
    mark: document.querySelectorAll('.mark'),
};

const bgFilter = document.querySelector('.bg-filter');

const displayForm = (e) => {
    bgFilter.style.display = 'block';
    if (e.target.id === 'new-task') {
        const newTaskForm = document.querySelector('.new-task-form');
        newTaskForm.style.display = 'block';
    }
    if (e.target.id === 'new-project') {
        const newProjectForm = document.querySelector('.new-project-form');
        newProjectForm.style.display = 'block';
    }
};

const formInitiate = () => {
    
};

const closeForm = (e) => {
    bgFilter.style.display = 'none';
    e.target.parentNode.style.display = 'none';
};
const closeButton = document.querySelectorAll('.close');
closeButton.forEach(item => item.addEventListener('click', closeForm));

// Page initiate

const pageInitiate = () => {
    mainButtons.newTask.addEventListener('click', displayForm);
    mainButtons.newProject.addEventListener('click', displayForm);
};

pageInitiate();