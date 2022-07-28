'use strict';

import { ticketMarkup } from '../templates/gallery';
import { TicketmasterAPI } from './ticketmaster-api';
import { paginal } from './paginal';

const ticketmasterAPI = new TicketmasterAPI();

const galleryEl = document.querySelector('.gallery');
const searchQueryEl = document.querySelector('.js-serch-query');
const searchCountryEl = document.querySelector('.country-input');

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
