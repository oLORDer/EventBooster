'use strict';

export function ticketMarkup(el) {
  return `<li data-id="${el.id}" class= "gallery__item">

  <div class="js-target">
    <picture>
      <img
      class="gallery__img"
        src="${el.images[0].url}"
        alt="фото веб-сайта"
      />
    </picture>

    <div class="gallery__wrap">
      <h2 class="gallery__title"> ${el.name}</h2>
      <p class="gallery__txt">${el.dates.start.localDate}</p>
    </div>
  </div>

<a class="gallery__link" href=""><span class="gallery__link--text">
${el._embedded.venues[0].name}</span></a>
</li>`;
}
