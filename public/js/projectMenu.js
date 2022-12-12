'use strict';

const tableBtn = document.querySelector('#table');
const pertBtn = document.querySelector('#pert');
const ganttBtn = document.querySelector('#gantt');
const tableInterface = document.querySelector('.interface__content-table');
const pertInterface = document.querySelector('.interface__content-pert');
const ganttInterface = document.querySelector('.interface__content-gantt');
let state = 1;

tableBtn.addEventListener('click', () => {
    if (state !== 1) {
        tableBtn.classList.add('active-options');
        pertBtn.classList.remove('active-options');
        ganttBtn.classList.remove('active-options');
        tableInterface.style.display = 'block';
        pertInterface.style.display = 'none';
        ganttInterface.style.display = 'none';
        state = 1;
    }
});

pertBtn.addEventListener('click', () => {
    if (state !== 2) {
        tableBtn.classList.remove('active-options');
        pertBtn.classList.add('active-options');
        ganttBtn.classList.remove('active-options');
        tableInterface.style.display = 'none';
        pertInterface.style.display = 'block';
        ganttInterface.style.display = 'none';
        state = 2;
    }
});

ganttBtn.addEventListener('click', () => {
    if (state !== 3) {
        tableBtn.classList.remove('active-options');
        pertBtn.classList.remove('active-options');
        ganttBtn.classList.add('active-options');
        tableInterface.style.display = 'none';
        pertInterface.style.display = 'none';
        ganttInterface.style.display = 'block';
        state = 3;
    }
});
