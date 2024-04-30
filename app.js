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
const cardsChosen = []
const cardsChosenIds = []

function createBoard() {
    for(let i=0; i<cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard);
        gridDisplay.appendChild(card)
}


}

createBoard()

function checkMatch() {
    const cards = document.querySelectorAll('img')
    cardsChosen[0] == cardsChosen[1]
        alert('match');
        cards[cardsChosenIds[0].setAtrribute('src', 'images/white.png')]
        cards[cardsChosenIds[1].setAtrribute('src', 'images/white.png')]
        cards[cardsChosenIds[0].removeEventListener('click', 'flipCard')]
        cards[cardsChosenIds[1].removeEventListener('click', 'flipCard')]
    
}


function flipCard() {
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId)
    console.log('clicked', cardId)
    this.setAttribute('src', cardArray[cardId].Img)
    if (cardsChosen.length === 2) {
        setTimeout(checkMatch, 500)
    }
}
flipCard()



















