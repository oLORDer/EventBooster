'use strict';

export function ticketModal(el) {
  return `<div class="modal">
  <div class="modal__window">
    <button class="modal__close-btn" type="button">
      <svg class="modal__close-icon" width="17" height="17">
        <use href="./images/sprite.svg#icon-close"></use>
      </svg>
    </button>
    <picture class="modal__img">
      <source
        srcset="
        ${el.images[0].url} 1x,
        ${el.images[0].url} 2x
        "
      />
      <img src="${el.images[0].url}" alt="logo-artist" />
    </picture>
    <ul class="modal__list">
      <li class="modal__item-img">
        <picture class="modal__item-poster">
          <source
            srcset="
            ${el.images[0].url} 1x,
            ${el.images[0].url} 2x
            "
          />
          <img src="${el.images[0].url}" alt="logo-artist" />
        </picture>
      </li>
      <li class="modal__item">
        <h2 class="modal__title">Info</h2>
        <p class="modal__text">
        el._embedded.venues[1].generalRule ${el.dates.start.localDate}
        </p>
      </li>
      <li class="modal__item">
        <h2 class="modal__title">When</h2>
        <p class="modal__text">${el.dates.start.localDate}</p>
        <p class="modal__text">${el.dates.start.localTime} (${el.dates.start.timezone})</p>
      </li>
      <li class="modal__item">
        <h2 class="modal__title">Where</h2>
        <p class="modal__text">${el.dates.start.timezone}</p>
        <p class="modal__text">${el._embedded.venues[0].name}</p>
      </li>
      <li class="modal__item">
        <h2 class="modal__title">Who</h2>
        <p>${el.name}</p>
      </li>
      <li class="modal__item">
        <h2 class="modal__title">Prices</h2>
        <p class="modal__text-wrapper">
          <svg class="modal__text-ticket" width="24" height="16">
            <use href="./images/sprite.svg#icon-ticket"></use>
          </svg>
          el.priceRanges.type el.priceRanges.min-el.priceRanges.max el.priceRanges.currency
        </p>
        <button class="modal__buy-btn blob-btn">
          Buy tickets
          <span class="blob-btn__inner">
            <span class="blob-btn__blobs">
              <span class="blob-btn__blob"></span>
              <span class="blob-btn__blob"></span>
              <span class="blob-btn__blob"></span>
              <span class="blob-btn__blob"></span>
            </span>
          </span>
        </button>
        <p class="modal__text-wrapper">
          <svg class="modal__text-ticket" width="24" height="16">
            <use href="./images/sprite.svg#icon-ticket"></use>
          </svg>
          VIP 1000-1500 UAH
        </p>
        <button class="modal__buy-btn blob-btn">
          Buy tickets
          <span class="blob-btn__inner">
            <span class="blob-btn__blobs">
              <span class="blob-btn__blob"></span>
              <span class="blob-btn__blob"></span>
              <span class="blob-btn__blob"></span>
              <span class="blob-btn__blob"></span>
            </span>
          </span>
        </button>
      </li>
    </ul>
    <button class="modal__author-btn more-btn">
      More From This Author
      <span class="more-btn__wrap">
        <span class="more-btn__mores">
          <span class="more-btn__more"></span>
          <span class="more-btn__more"></span>
          <span class="more-btn__more"></span>
          <span class="more-btn__more"></span>
        </span>
      </span>
    </button>
  </div>
</div>
`;
}
