import { ticketMarkup } from '../templates/gallery';
import { TicketmasterAPI } from './ticketmaster-api';
import { paginal } from './paginal';

const galleryEl = document.querySelector('.gallery');
const ticketmasterAPI = new TicketmasterAPI();

renderBaseMarkup();

async function renderBaseMarkup() {
  ticketmasterAPI.searchQuery = 'winter';
  try {
    const response = await ticketmasterAPI.fetchTickets();
    const baseMarkup = response._embedded.events
      .map(el => {
        return ticketMarkup(el);
      })
      .join('');

    galleryEl.innerHTML = baseMarkup;
    // console.log(response);
    paginal(response.page.totalElements, ticketmasterAPI.size, ticketmasterAPI.page)
  } catch (err) {
    console.log(err);
  }
}

export {ticketmasterAPI, renderBaseMarkup};