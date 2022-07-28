'use strict';

import { ticketModal } from '../templates/modal-card';
import { ticketMarkup } from '../templates/gallery';
import { TicketmasterAPI } from './ticketmaster-api';
import { paginal } from './paginal';

const ticketmasterAPI = new TicketmasterAPI();

const galleryEl = document.querySelector('.gallery');
const searchQueryEl = document.querySelector('.js-serch-query');
const searchCountryEl = document.querySelector('.country-input');

const modalEl = document.querySelector('.for-modal-js');

renderBaseMarkup();

searchQueryEl.addEventListener('submit', onSerchQuerySubmit);
// searchCountryEl.addEventListener('change', onSerchCountryChange);

// function onSerchCountryChange() {
//   ticketmasterAPI.searchCountry = searchCountryEl.value;
//   renderBaseMarkup();
// }

async function onSerchQuerySubmit(e) {
  e.preventDefault();
  ticketmasterAPI.searchQuery = e.currentTarget.elements.serchQuery.value;
  renderBaseMarkup();
}

async function renderBaseMarkup() {
  try {
    const response = await ticketmasterAPI.fetchTickets();
    const baseMarkup = response._embedded.events
      .map(el => {
        return ticketMarkup(el);
      })
      .join('');

    galleryEl.innerHTML = baseMarkup;

    //? >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

    let inputs = galleryEl.getElementsByTagName('LI');

    for (let i = 0; i < inputs.length; i += 1) {
      inputs[i].addEventListener('click', onTargetElementClick);
    }

    function onTargetElementClick() {
      let modalCardMarkup = null;
      response._embedded.events.forEach(el => {
        if (this.dataset.id === el.id) {
          return (modalCardMarkup = ticketModal(el));
        }
      });
      modalEl.innerHTML = modalCardMarkup;
      document.body.classList.add('no-scroll');

      const closeModalBtn = document.querySelector('.modal__close-btn');
      const backdropEl = document.querySelector('.modal');

      window.addEventListener('keydown', onEscBtnPush);
      backdropEl.addEventListener('click', onBackdropElClick);
      closeModalBtn.addEventListener('click', closeModalWindow);

      function onBackdropElClick(e) {
        if (e.target !== e.currentTarget) {
          return;
        }
        closeModalWindow();
      }

      function onEscBtnPush(e) {
        if (e.code !== 'Escape') {
          return;
        }
        closeModalWindow();
      }

      function closeModalWindow() {
        modalEl.innerHTML = '';
        document.body.classList.remove('no-scroll');
        window.removeEventListener('keydown', onEscBtnPush);
      }
    }

    //? <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

    paginal(
      response.page.totalElements,
      ticketmasterAPI.size,
      ticketmasterAPI.page
    );
  } catch (err) {
    console.log(err);
  }
}

export { ticketmasterAPI, renderBaseMarkup };
