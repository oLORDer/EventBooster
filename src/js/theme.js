'use strict'
const btn = document.querySelector('.switch')

btn.addEventListener('click', () => {
    if(localStorage.getItem('theme') === 'light'){

        localStorage.removeItem('theme');
    } else {
        localStorage.setItem ('theme', 'light');
        btn.checked
    }
    addLightClassToBody()
})

function addLightClassToBody() {
        if(localStorage.getItem('theme') === 'light') {
            document.querySelector('body').classList.add('light');
        } else {
            document.querySelector('body').classList.remove('light')
        }
    }

addLightClassToBody()

document.getElementById('theme-toggle').addEventListener('click', (e) => {
    const checked = e.target.checked;
    document.body.setAttribute('theme', checked ? 'light' : 'dark');
  });