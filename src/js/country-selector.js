'use strict';
const selected = document.querySelector('.selected');
const optionsContainer = document.querySelector('.options-container');
const optionsList = document.querySelectorAll('.option');
let inputId = "";
selected.addEventListener('click', () => {
  optionsContainer.classList.toggle('active');
});

optionsList.forEach(element => {
  element.addEventListener('click', (event) => {
    let inputId = event.target.id;
    selected.innerHTML = element.querySelector('label').innerHTML;
    console.log(inputId)
    optionsContainer.classList.remove('active');
});
});



