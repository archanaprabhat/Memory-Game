const cardArray = [
    {
        name: 'fries',
        Img: 'images/fries.png',
    },
    {
        name: 'cheeseburger',
        Img: 'images/cheeseburger.png',
    },
    {
        name: 'hotdog',
        Img: 'images/hotdog.png',
    },
    {
        name: 'icecream',
        Img: 'images/ice-cream.png',
    },
    {
        name: 'milkshake',
        Img: 'images/milkshake.png',
    },
    {
        name: 'piza',
        Img: 'images/pizza.png',
    },
    {
        name: 'fries',
        Img: 'images/fries.png',
    },
    {
        name: 'cheeseburger',
        Img: 'images/cheeseburger.png',
    },
    {
        name: 'hotdog',
        Img: 'images/hotdog.png',
    },
    {
        name: 'icecream',
        Img: 'images/ice-cream.png',
    },
    {
        name: 'milkshake',
        Img: 'images/milkshake.png',
    },
    {
        name: 'piza',
        Img: 'images/pizza.png',
    },
];

cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid')

function createBoard() {
    for(let i=0; i<10; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'images/blank.png')
}


}




















