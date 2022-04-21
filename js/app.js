'use strict';
let id = document.querySelector('.advide-id'),
    adviceParagraph = document.querySelector('.advice p'),
    btn = document.querySelector('button'),
    icon = document.querySelector('button img');


btn.addEventListener('click', () =>{    

    icon.style.animation = `spin .5s linear infinite `

    id.textContent = `ADVICE #...`

    adviceParagraph.textContent = `“Loading...”`

    setTimeout(()=>{

        fetch('https://api.adviceslip.com/advice')
        .then(response => response.json())
        .then(data => {

            icon.style.animationPlayState = 'paused'

                id.textContent = `ADVICE #${data.slip.id}`

                adviceParagraph.textContent = `“${data.slip.advice}”`

        })
        .catch(err => console.error(err));
    },500)
});