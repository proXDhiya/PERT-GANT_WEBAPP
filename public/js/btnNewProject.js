'use strict';

const btnNewProject = document.getElementById('btnNewProject');
const newProjectModule = document.querySelector('.newProject');
const closeProjectModule = document.querySelector('.newProject > ion-icon');

btnNewProject.addEventListener('click', () => {
    newProjectModule.style.display = 'grid';
});


closeProjectModule.addEventListener('click', () => {
    newProjectModule.style.display = 'none';
});
