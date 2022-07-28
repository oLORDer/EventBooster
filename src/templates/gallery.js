'use strict';

import point from '../images/point.svg';
import checkmark from '../images/close.svg';

export function ticketMarkup(el) {
  return `<li data-id="${el.id}" class= "gallery__item">

  <div class="">
    <picture>
      <source
        srcset="
        ${el.images[0].url} 1x,
        ${el.images[0].url} 2x
        "
        type="image/jpg"
      />
      <img
      class="gallery__img js-target"
        src="${el.images[0].url}"
        alt="фото веб-сайта"
      />
    </picture>

    <div class="gallery__wrap">
      <h2 class="gallery__title js-target"> ${el.name}</h2>
      <p class="gallery__txt js-target">${el.dates.start.localDate}</p>
    </div>
  </div>

<a class="gallery__link" href="">
  <svg class="gallery__icon" width="10" height="10">
    <use xlink:href="${point}"></use>
  </svg> 
  
${el._embedded.venues[0].name}</a>
</li>
`;
}
