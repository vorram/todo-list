import "./style.css";
import {
  format,
  add,
  isWithinInterval,
  set,
  compareAsc,
  parseISO,
  isBefore,
} from "date-fns";

// Selectors

const mainButtons = {
  newTask: document.querySelector("#new-task"),
  newProject: document.querySelector("#new-project"),
  today: document.querySelector("#menu-today"),
  tomorrow: document.querySelector("#menu-tomorrow"),
  thisWeek: document.querySelector("#menu-week"),
  thisMonth: document.querySelector("#menu-month"),
  allTasks: document.querySelector("#menu-all"),
  currentProject: document.querySelector("#current-project"),
};

const formButtons = {
  createTask: document.querySelector("#create-task"),
  createProject: document.querySelector("#create-project"),
  close: document.querySelectorAll(".close"),
};

const formInputs = {
  task: document.querySelector("#task"),
  priority: document.querySelector("#priority"),
  date: document.querySelector("#due-date"),
  project: document.querySelector("#assign-project"),
  notes: document.querySelector("#notes"),
  projectName: document.querySelector("#project"),
};

const taskButtons = {
  edit: document.querySelectorAll(".edit"),
  delete: document.querySelectorAll(".delete"),
  mark: document.querySelectorAll(".mark"),
};

const bgFilter = document.querySelector(".bg-filter");
const newTaskForm = document.querySelector(".new-task-form");
const newProjectForm = document.querySelector(".new-project-form");
const listContainer = document.querySelector(".list-container");

// Task creation and storage

let allTasks = [];
let projects = ["Default"];

class Task {
  constructor(task, priority, date, project, notes) {
    this.task = task;
    this.priority = priority;
    this.date = date;
    this.project = project;
    this.notes = notes;
  }
}

const createTask = () => {
  const newTask = new Task(
    formInputs.task.value,
    formInputs.priority.value,
    formInputs.date.valueAsDate,
    formInputs.project.value,
    formInputs.notes.value
  );
  allTasks.push(newTask);
  allTasks.sort(function (a, b) {
    return compareAsc(a.date, b.date);
  });
  localStorage.setItem("allTasks", JSON.stringify(allTasks));
};

const createProject = (name) => {
  projects.push(name);
  localStorage.setItem("projects", JSON.stringify(projects));
  displayProjects(projects);
};

const clearInputs = () => {
  formInputs.task.value = "";
  formInputs.priority.value = "Normal";
  formInputs.date.valueAsDate = new Date();
  formInputs.project.value = "Default";
  formInputs.notes.value = "";
  formInputs.projectName.value = "";
};

// Display

const displayProjects = (array) => {
  const projectList = document.querySelector("#current-project");
  while (projectList.lastChild) {
    projectList.lastChild.remove();
  }
  while (formInputs.project.lastChild) {
    formInputs.project.lastChild.remove();
  }
  array.forEach((project) => {
    const newProject = document.createElement("option");
    newProject.value = project;
    newProject.textContent = project;
    projectList.appendChild(newProject);
    const newProjectOption = document.createElement("option");
    newProjectOption.value = project;
    newProjectOption.textContent = project;
    formInputs.project.appendChild(newProjectOption);
  });
};

const displayForm = (e) => {
  bgFilter.style.display = "block";
  if (e.target.id === "new-task") {
    newTaskForm.style.display = "block";
  }
  if (e.target.id === "new-project") {
    newProjectForm.style.display = "block";
  }
};

const createTaskBtn = () => {
  createTask();
  displayTasks(allTasks);
  closeForm();
};

const createProjectBtn = () => {
  createProject(formInputs.projectName.value);
  const projectList = document.querySelector("#current-project");
  projectList.value = formInputs.project.value;
  projectList.lastChild.setAttribute("selected", "");
  closeForm();
};

const closeForm = () => {
  bgFilter.style.display = "none";
  newTaskForm.style.display = "none";
  newProjectForm.style.display = "none";
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
  allTasks.forEach((task) => {
    if (format(task.date, "dd-MM-yyyy") === format(new Date(), "dd-MM-yyyy")) {
      todayArray.push(task);
    }
  });
  displayTasks(todayArray);
};

const displayTomorrow = () => {
  clearArrays();
  let tomorrow = add(new Date(), { days: 1 });
  allTasks.forEach((task) => {
    if (format(task.date, "dd-MM-yyyy") === format(tomorrow, "dd-MM-yyyy")) {
      tomorrowArray.push(task);
    }
  });
  displayTasks(tomorrowArray);
};

const displayWeek = () => {
  clearArrays();
  let week = add(new Date(), { weeks: 1 });
  allTasks.forEach((task) => {
    if (
      isWithinInterval(task.date, {
        start: set(new Date(), { hours: 0, minutes: 0, seconds: 0 }),
        end: week,
      })
    ) {
      weekArray.push(task);
    }
  });
  displayTasks(weekArray);
};

const displayMonth = () => {
  clearArrays();
  let month = add(new Date(), { months: 1 });
  allTasks.forEach((task) => {
    if (
      isWithinInterval(task.date, {
        start: set(new Date(), { hours: 0, minutes: 0, seconds: 0 }),
        end: month,
      })
    ) {
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
  while (
    listContainer.lastChild &&
    listContainer.lastChild.className === "list-task"
  ) {
    listContainer.lastChild.remove();
  }
  let number = 0;
  array.forEach((task) => {
    let currentProject = document.querySelector("#current-project");
    if (currentProject.value === task.project) {
      const deleteTask = (e) => {
        e.target.parentNode.remove();
        allTasks.splice(allTasks.indexOf(task), 1);
        localStorage.setItem("allTasks", JSON.stringify(allTasks));
      };
      const markTask = () => {
        taskContainer.style.backgroundColor = "rgb(144, 255, 53)";
        taskContainer.style.color = "rgba(0, 0, 0, 0.6)";
        order.style.textDecoration = "line-through";
        taskText.style.textDecoration = "line-through";
        priority.style.textDecoration = "line-through";
        date.style.textDecoration = "line-through";
        edit.style.display = "none";
        mark.style.display = "none";
        deleteTaskBtn.style.backgroundColor = "rgb(127, 177, 28)";
        task.marked = true;
        localStorage.setItem("allTasks", JSON.stringify(allTasks));
      };
      const editTask = () => {
        if (
          taskContainer.nextSibling &&
          taskContainer.nextSibling.className === "note"
        ) {
          taskContainer.nextSibling.remove();
        }
        taskText.removeEventListener("click", displayNotes);
        taskText.classList.remove("task-text");
        taskText.textContent = "";
        priority.textContent = "";
        date.textContent = "";
        edit.style.display = "none";
        deleteTaskBtn.style.display = "none";
        mark.style.display = "none";
        taskContainer.style.minHeight = "100px";

        const updateTask = () => {
          taskTextEdit.remove();
          taskNotesEdit.remove();
          btnContainer.remove();
          taskPriorityEdit.remove();
          taskDateEdit.remove();

          taskText.textContent = task.task;
          priority.textContent = task.priority;
          date.textContent = format(task.date, "dd-MM-yyyy");
          edit.style.display = "block";
          deleteTaskBtn.style.display = "block";
          mark.style.display = "block";
          taskContainer.style.minHeight = "auto";
          taskText.classList.add("task-text");
          taskText.addEventListener("click", displayNotes);
        };

        const taskTextEdit = document.createElement("input");
        taskTextEdit.setAttribute("type", "text");
        taskTextEdit.value = task.task;
        taskText.appendChild(taskTextEdit);
        const taskNotesEdit = document.createElement("textarea");
        taskNotesEdit.value = task.notes;
        taskText.appendChild(taskNotesEdit);
        const btnContainer = document.createElement("div");
        btnContainer.classList.add("edit-btn-container");
        taskText.appendChild(btnContainer);
        const saveBtn = document.createElement("button");
        saveBtn.classList.add("edit-btn");
        saveBtn.textContent = "SAVE";
        saveBtn.addEventListener("click", function () {
          task.task = taskTextEdit.value;
          task.priority = taskPriorityEdit.value;
          task.date = taskDateEdit.valueAsDate;
          task.notes = taskNotesEdit.value;
          allTasks.sort(function (a, b) {
            return compareAsc(a.date, b.date);
          });
          localStorage.setItem("allTasks", JSON.stringify(allTasks));
          updateTask();
        });
        btnContainer.appendChild(saveBtn);
        const cancelBtn = document.createElement("button");
        cancelBtn.classList.add("edit-btn");
        cancelBtn.textContent = "CANCEL";
        cancelBtn.addEventListener("click", function () {
          updateTask();
        });
        btnContainer.appendChild(cancelBtn);
        const taskPriorityEdit = document.createElement("select");
        taskPriorityEdit.style.fontSize = "16px";
        const normal = document.createElement("option");
        normal.textContent = "Normal";
        taskPriorityEdit.appendChild(normal);
        const high = document.createElement("option");
        high.textContent = "High";
        taskPriorityEdit.appendChild(high);
        const veryHigh = document.createElement("option");
        veryHigh.textContent = "Very High";
        taskPriorityEdit.appendChild(veryHigh);
        taskPriorityEdit.value = task.priority;
        priority.appendChild(taskPriorityEdit);

        const taskDateEdit = document.createElement("input");
        taskDateEdit.setAttribute("type", "date");
        taskDateEdit.style.width = "140px";
        taskDateEdit.style.fontSize = "14px";
        taskDateEdit.valueAsDate = task.date;
        date.appendChild(taskDateEdit);
      };

      const displayNotes = () => {
        if (
          taskContainer.nextSibling &&
          taskContainer.nextSibling.className === "note"
        ) {
          taskContainer.nextSibling.remove();
        } else {
          const note = document.createElement("div");
          note.classList.add("note");
          note.textContent = task.notes;
          note.style.width = window.getComputedStyle(taskText).width;
          listContainer.insertBefore(note, taskContainer.nextSibling);
        }
      };
      number++;
      const taskContainer = document.createElement("div");
      taskContainer.classList.add("list-task");
      const order = document.createElement("div");
      order.textContent = number.toString();
      taskContainer.appendChild(order);
      const taskText = document.createElement("div");
      taskText.classList.add("task-text");
      taskText.textContent = task.task;
      taskText.addEventListener("click", displayNotes);
      taskContainer.appendChild(taskText);
      const priority = document.createElement("div");
      priority.textContent = task.priority;
      taskContainer.appendChild(priority);
      const date = document.createElement("div");
      date.textContent = format(task.date, "dd-MM-yyyy");
      taskContainer.appendChild(date);
      const edit = document.createElement("button");
      edit.classList.add("list-task-button");
      edit.textContent = "📝";
      edit.addEventListener("click", editTask);
      taskContainer.appendChild(edit);
      const deleteTaskBtn = document.createElement("button");
      deleteTaskBtn.classList.add("list-task-button");
      deleteTaskBtn.textContent = "❌";
      deleteTaskBtn.addEventListener("click", deleteTask);
      taskContainer.appendChild(deleteTaskBtn);
      const mark = document.createElement("button");
      mark.classList.add("list-task-button");
      mark.classList.add("mark");
      mark.textContent = "✅";
      mark.addEventListener("click", markTask);
      taskContainer.appendChild(mark);

      let todayDate = set(new Date(), { hours: 0, minutes: 0, seconds: 0 });

      const markExpired = () => {
        taskContainer.style.backgroundColor = "rgb(255, 94, 94)";
        taskContainer.style.color = "rgba(0, 0, 0, 0.6)";
        order.style.textDecoration = "line-through";
        taskText.style.textDecoration = "line-through";
        priority.style.textDecoration = "line-through";
        date.style.textDecoration = "line-through";
        edit.hidden = true;
        mark.hidden = true;
      };

      if (isBefore(task.date, todayDate)) {
        markExpired();
      }

      if (task.marked) {
        markTask();
      }

      listContainer.appendChild(taskContainer);
    }
  });
};

// Page initiate

const pageInitiate = () => {
  mainButtons.newTask.addEventListener("click", displayForm);
  mainButtons.newProject.addEventListener("click", displayForm);
  mainButtons.today.addEventListener("click", displayToday);
  mainButtons.tomorrow.addEventListener("click", displayTomorrow);
  mainButtons.thisWeek.addEventListener("click", displayWeek);
  mainButtons.thisMonth.addEventListener("click", displayMonth);
  mainButtons.allTasks.addEventListener("click", displayAll);
  mainButtons.currentProject.addEventListener("input", displayAll);
  formButtons.close.forEach((item) =>
    item.addEventListener("click", closeForm)
  );
  formButtons.createTask.addEventListener("click", createTaskBtn);
  formButtons.createProject.addEventListener("click", createProjectBtn);
  formInputs.date.valueAsDate = new Date();

  if (localStorage.getItem("projects") !== null) {
    projects = JSON.parse(localStorage.getItem("projects"));
  }

  //localStorage.removeItem('projects');
  //localStorage.removeItem('allTasks');

  displayProjects(projects);

  if (localStorage.getItem("allTasks") !== null) {
    allTasks = JSON.parse(localStorage.getItem("allTasks"));
    allTasks.forEach((item) => {
      item.date = parseISO(item.date);
    });
    displayAll();
  }
};

pageInitiate();
