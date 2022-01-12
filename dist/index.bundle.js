/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");


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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05xQjs7QUFFckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cbmNvbnN0IG1haW5CdXR0b25zID0ge1xuICAgIG5ld1Rhc2s6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuZXctdGFzaycpLFxuICAgIG5ld1Byb2plY3Q6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuZXctcHJvamVjdCcpLFxuICAgIHRvZGF5OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWVudS10b2RheScpLFxuICAgIHRvbW9ycm93OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWVudS10b21vcnJvdycpLFxuICAgIHRoaXNXZWVrOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWVudS13ZWVrJyksXG4gICAgdGhpc01vbnRoOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWVudS1tb250aCcpLFxuICAgIGFsbFRhc2tzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWVudS1hbGwnKSxcbn07XG5cbmNvbnN0IGZvcm1CdXR0b25zID0ge1xuICAgIGNyZWF0ZVRhc2s6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjcmVhdGUtdGFzaycpLFxuICAgIGNyZWF0ZVByb2plY3Q6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjcmVhdGUtcHJvamVjdCcpLFxuICAgIGNsb3NlOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2xvc2UnKSxcbn07XG5cbmNvbnN0IHRhc2tCdXR0b25zID0ge1xuICAgIGVkaXQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5lZGl0JyksXG4gICAgZGVsZXRlOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGVsZXRlJyksXG4gICAgbWFyazogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1hcmsnKSxcbn07XG5cbmNvbnN0IGJnRmlsdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJnLWZpbHRlcicpO1xuXG5jb25zdCBkaXNwbGF5Rm9ybSA9IChlKSA9PiB7XG4gICAgYmdGaWx0ZXIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgaWYgKGUudGFyZ2V0LmlkID09PSAnbmV3LXRhc2snKSB7XG4gICAgICAgIGNvbnN0IG5ld1Rhc2tGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy10YXNrLWZvcm0nKTtcbiAgICAgICAgbmV3VGFza0Zvcm0uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgfVxuICAgIGlmIChlLnRhcmdldC5pZCA9PT0gJ25ldy1wcm9qZWN0Jykge1xuICAgICAgICBjb25zdCBuZXdQcm9qZWN0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctcHJvamVjdC1mb3JtJyk7XG4gICAgICAgIG5ld1Byb2plY3RGb3JtLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIH1cbn07XG5cbmNvbnN0IGZvcm1Jbml0aWF0ZSA9ICgpID0+IHtcbiAgICBcbn07XG5cbmNvbnN0IGNsb3NlRm9ybSA9IChlKSA9PiB7XG4gICAgYmdGaWx0ZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBlLnRhcmdldC5wYXJlbnROb2RlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG59O1xuY29uc3QgY2xvc2VCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2xvc2UnKTtcbmNsb3NlQnV0dG9uLmZvckVhY2goaXRlbSA9PiBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VGb3JtKSk7XG5cbi8vIFBhZ2UgaW5pdGlhdGVcblxuY29uc3QgcGFnZUluaXRpYXRlID0gKCkgPT4ge1xuICAgIG1haW5CdXR0b25zLm5ld1Rhc2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkaXNwbGF5Rm9ybSk7XG4gICAgbWFpbkJ1dHRvbnMubmV3UHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRpc3BsYXlGb3JtKTtcbn07XG5cbnBhZ2VJbml0aWF0ZSgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==