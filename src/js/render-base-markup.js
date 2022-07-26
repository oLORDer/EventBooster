import { ticketMarkup } from '../templates/gallery';
import { TicketmasterAPI } from './ticketmaster-api';

const galleryEl = document.querySelector('.gallery');
const ticketmasterAPI = new TicketmasterAPI();

renderBaseMarkup();

async function renderBaseMarkup() {
  try {
    const response = await ticketmasterAPI.fetchTickets();
    const baseMarkup = response._embedded.events
      .map(el => {
        return ticketMarkup(el);
      })
      .join('');

    galleryEl.innerHTML = baseMarkup;
  } catch (err) {
    console.log(err);
  }
}
