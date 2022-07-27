'use strict';

import { ticketMarkup } from '../templates/gallery';
import { ticketModal } from '../templates/modal-card';
import { TicketmasterAPI } from './ticketmaster-api';
import { paginal } from './paginal';

const ticketmasterAPI = new TicketmasterAPI();

const galleryEl = document.querySelector('.gallery');
const searchQueryEl = document.querySelector('.search-input');
const searchCountryEl = document.querySelector('.country-input');

renderBaseMarkup();
// searchQueryEl.addEventListener('submit', onSerchQuerySubmit);
// searchCountryEl.addEventListener('change', onSerchCountryChange);

// function onSerchCountryChange() {
//   ticketmasterAPI.searchCountry = searchCountryEl.value;
//   renderBaseMarkup();
// }

// function onSerchQuerySubmit(e) {
//   e.preventDefault();
//   ticketmasterAPI.searchQuery = searchQueryEl.value;
//   renderBaseMarkup();
// }

async function renderBaseMarkup() {
  try {
    const response = await ticketmasterAPI.fetchTickets();
    const baseMarkup = response._embedded.events
      .map(el => {
        return ticketMarkup(el);
      })
      .join('');

    galleryEl.innerHTML = baseMarkup;
    galleryEl.addEventListener('click', onTargetElementClick);

    async function onTargetElementClick(e) {
      try {
        if (!e.target.classList.contains('js-target')) {
          return;
        }
        const response = await ticketmasterAPI.fetchTickets();
        console.log(response);
        const modalCardMarkup = response._embedded.events
          .map(el => {
            return ticketModal(el);
          })
          .join('');

        // bodyEl.innerHTML = modalCardMarkup;
        document.body.insertAdjacentHTML('beforeend', modalCardMarkup);
      } catch (err) {
        console.log(err);
      }
    }

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
