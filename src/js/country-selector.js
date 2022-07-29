'use strict';
import { ticketmasterAPI, renderBaseMarkup } from './render-base-markup';

const selected = document.querySelector('.selected');
const optionsContainer = document.querySelector('.options-container');
const optionsList = document.querySelectorAll('.option');

selected.addEventListener('click', () => {
  optionsContainer.classList.toggle('active');
});

optionsList.forEach(element => {
  element.addEventListener('click', event => {
    selected.innerHTML = element.querySelector('label').innerHTML;
    ticketmasterAPI.searchCountry = event.target.id;
    renderBaseMarkup();
    optionsContainer.classList.remove('active');
  });
});
