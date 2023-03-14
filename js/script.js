"use strict";

const slides = [
{
    image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

console.log(slides);

const { createApp } = Vue;

createApp({
    data() {
        return {
            movie: {
                title:[
                    'Marvel\'s Spiderman Miles Morale',
                    'Ratchet & Clank: Rift Apart',
                    'Fortnite',
                    'Stray',
                    "Marvel's Avengers"
                ],
                image:[
                    'img/01.webp',
                    'img/02.webp',
                    'img/03.webp',
                    'img/04.webp',
                    'img/05.webp'
                ],
                text:[
                    'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                    'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                    "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                    'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                    'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
                ]
            }
        }

    }
}).mount("#app");

let active = 0;
const slider = document.querySelector('.slider');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
let itemsContent = '';

const items = document.querySelectorAll('.item');
items[active].classList.add('show');

console.log(items);

for (let i = 0; i < slides.length; i++) {
    console.log(slides[i]);
    itemsContent += `<div class="item"><img src="img/${slides[i]}" alt=""></div>`
}


slider.innerHTML = slider.innerHTML + itemsContent;


prev.addEventListener('click', function () {
    if(active > 0){
        items[active].classList.remove('show');
        active--;
        items[active].classList.add('show');
    }
});

next.addEventListener('click', function () {
    if(active < items.length - 1){
        console.log('incremento active');
        items[active].classList.remove('show');
        active++;
        items[active].classList.add('show');
    }
});




