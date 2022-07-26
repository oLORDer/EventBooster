import {ticketmasterAPI, renderBaseMarkup} from './render-base-markup';

const list = document.querySelector('.paginal');
let currentPageForCheck;

function paginal(totalObjects, numberImgPerPage, currentPage) {
  const sum = Math.ceil(totalObjects / numberImgPerPage);
  let btnsArr = [];
  currentPageForCheck = currentPage + 1;
  // console.log(currentPage)

  for(let i = 1; i <= sum; i += 1) {
    btnsArr.push(`<li>${i}</li>`);
  }

  let len = btnsArr.length;

  if(currentPage > 4) {
    list.innerHTML = btnsArr[0] + '..' + btnsArr[currentPage - 1] + btnsArr.slice(currentPage, currentPage + 3).join('') + '.....' +  btnsArr[len - 1];
    console.log('5')
  } else if(currentPage > 0) {
    list.innerHTML = btnsArr[currentPage - 1] + btnsArr.slice(currentPage, currentPage + 3).join('') + '.....' +  btnsArr[len - 1];
    console.log('kyky')
  } else {
    list.innerHTML = btnsArr.slice(currentPage, currentPage + 3).join('') + '.....' +  btnsArr[len - 1];
  }

  list.addEventListener('click', paginClick);
}



function paginClick(e) {
  if (e.target.nodeName !== 'LI' || e.target.textContent == currentPageForCheck) {return}
  console.log(currentPageForCheck)
  ticketmasterAPI.page = e.target.textContent - 1;
  renderBaseMarkup();
  // console.log(e.target.textContent)
}
// console.log(ticketmasterAPI.page);
export { paginal };