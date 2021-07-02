const reviews = [
    {
        id: 1,
        name: 'susan smith',
        title: 'web developer',
        content: 'Cost analysts study corporate expenses and create reports for management. One common industry for cost analysts is manufacturing where they are.',
        image: 'images/pexels-photo-3652805.jpeg',
    },
    {
        id: 2,
        name: 'lisa bailey',
        title: 'ux designer',
        content: 'To succeed in this role, you should show interest in following changes to tax regulations and laws. Excellent time management skills are also essential',
        image: 'images/pexels-photo-4056753.jpeg',
    },
    {
        id: 3,
        name: 'diane jones',
        title: 'digital marketer',
        content: 'Tax Accountant responsibilities also include organizing and maintaining records of tax payments Tax Accountant responsibilities also include.',
        image: 'images/pexels-photo-6269812.jpeg',
    },
    {
        id: 4,
        name: 'henry green',
        title: 'content creator',
        content: 'We are looking for a competent Collection Specialist to contact clients and collect outstanding payments. You will struck a balance between.',
        image: 'images/pexels-photo-7332597.jpeg',
    }
]

const image = document.querySelector('img');
const person = document.querySelector('h4.name');
const title = document.querySelector('.title');
const description = document.querySelector('p');

const leftBtn = document.querySelector('.left');
const rightBtn = document.querySelector('.right');
const surpriseMe = document.querySelector('.random');

let index = 0;

window.addEventListener('DOMContentLoaded', () =>{
    showPerson(index);
});

// right button

rightBtn.addEventListener('click', ()=>{
    index++;
    if(index > reviews.length -1){
        index = 0;
    }
    showPerson(index);
})

// left button

leftBtn.addEventListener('click', ()=>{
    index--;
    if(index < 0){
        index = reviews.length -1;
    }
    showPerson(index);
})

//surprise me button

surpriseMe.addEventListener('click', ()=>{
    index = Math.round(Math.random()*(reviews.length-1));
    showPerson(index);
    console.log(index);
})

function showPerson(number){
    const item = reviews[number];
    person.textContent = item.name;
    image.src = item.image;
    title.textContent = item.title;
    description.textContent = item.content;

}