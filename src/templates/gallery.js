'use strict';

export function ticketMarkup(el) {
  return `<li class= "gallery__item">
<a class="" href="">
  <div>
    <picture>
      <source
        srcset="
        ${el.images[0].url} 1x,
        ${el.images[0].url} 2x
        "
        type="image/jpg"
      />
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
</a>
<a class="gallery__link" href="">${el._embedded.venues[0].name}</a>
</li>
`;
}
