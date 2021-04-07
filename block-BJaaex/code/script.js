// Card data
const cardsArray = [{
        name: 'shell',
        img: "https://upload.wikimedia.org/wikipedia/en/6/60/Mario_Kart_Blue_Shell.png"
    },
    {
        name: 'star',
        img: "https://earthsky.org/upl/2017/09/gamma-cephei-quickV-Palomar-V-25x25-band.gif"
    },
    {
        name: 'bobomb',
        img: "https://i.pinimg.com/originals/55/f4/4a/55f44abd127cff24e4d19dfe23bff737.png"
    },
    {
        name: 'mario',
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiwgmHM2LBfw7gcg-K7nGlPlGw8BFwYdj_2w&usqp=CAU"
    },
    {
        name: 'luigi',
        img: 'https://play.nintendo.com/images/profile-mk-goomba.7bf2a8f2.aead314d58b63e27.png',
    },
    {
        name: 'peach',
        img: 'https://img.favpng.com/21/24/17/peaches-and-cream-computer-icons-emoji-png-favpng-WLq1PgHyEx55HyLRsGWf0nLL4_t.jpg',
    },
    {
        name: '1up',
        img: 'https://img.favpng.com/7/4/21/mario-bros-1-up-1up-com-nintendo-3ds-png-favpng-XbKTV0Unh0X4Gqqp3kE1KeWGt.jpg',
    },
    {
        name: 'mushroom',
        img: 'https://qph.fs.quoracdn.net/main-qimg-9dd740570cf59dea536977f42ac57aea',
    },
    {
        name: 'thwomp',
        img: 'https://img.favpng.com/5/8/4/new-super-mario-bros-u-bowser-png-favpng-92d7YDTwtRnVCwj29Qj4eJkEH_t.jpg',
    },
    {
        name: 'bulletbill',
        img: 'https://img.favpng.com/10/16/17/super-mario-bros-mario-kart-wii-new-super-mario-bros-super-mario-galaxy-png-favpng-7VdA47769AAUKDTeeiR30zGLi_t.jpg',
    },
    {
        name: 'coin',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREeV5wfSQdvSgXcxiWd7I-iPkDM-_qEwDZoQ&usqp=CAU',
    },
    {
        name: 'goomba',
        img: 'https://play.nintendo.com/images/profile-mk-luigi.7bf2a8f2.aead314d58b63e27.png',
    },
]
var gameGrid = cardsArray.concat(cardsArray).sort(function() {
    return 0.5 - Math.random();
});

var firstGuess = '';
var secondGuess = '';
var count = 0;
var previousTarget = null;
var delay = 1200;

const game = document.getElementById('game')
const grid = document.createElement('section')
grid.setAttribute('class', 'grid')
game.appendChild(grid);

gameGrid.forEach(function(item) {
    var name = item.name,
        img = item.img;
    var card = document.createElement('div');
    card.classList.add('card');
    card.dataset.name = name;

    var front = document.createElement('div');
    front.classList.add('front');

    var back = document.createElement('div');
    back.classList.add('back');
    back.style.backgroundImage = 'url(' + img + ')';

    grid.appendChild(card);
    card.appendChild(front);
    card.appendChild(back);
});
var match = function match() {
    var selected = document.querySelectorAll('.selected');
    selected.forEach(function(card) {
        card.classList.add('match');
    });
};
var resetGuesses = function resetGuesses() {
    firstGuess = '';
    secondGuess = '';
    count = 0;
    previousTarget = null;

    var selected = document.querySelectorAll('.selected');
    selected.forEach(function(card) {
        card.classList.remove('selected');
    });
};

grid.addEventListener('click', function(event) {

    var clicked = event.target;

    if (clicked.nodeName === 'SECTION' || clicked === previousTarget || clicked.parentNode.classList.contains('selected') || clicked.parentNode.classList.contains('match')) {
        return;
    }

    if (count < 2) {
        count++;
        if (count === 1) {
            firstGuess = clicked.parentNode.dataset.name;
            console.log(firstGuess);
            clicked.parentNode.classList.add('selected');
        } else {
            secondGuess = clicked.parentNode.dataset.name;
            console.log(secondGuess);
            clicked.parentNode.classList.add('selected');
        }

        if (firstGuess && secondGuess) {
            if (firstGuess === secondGuess) {
                setTimeout(match, delay);
            }
            setTimeout(resetGuesses, delay);
        }
        previousTarget = clicked;
    }
});