//https://www.youtube.com/watch?v=tjyDOHzKN0w was A LOT of help!
//event listener to get cards and scramble
document.addEventListener('DOMContentLoaded', () => {
    //list all card options
    //repeat the same 5 for all ten choices/matches

    const cards = [
        {
            name: 'beagle1',
            img: 'images/beagle.png'
        },
        {
            name: 'beagle2',
            img: 'images/beagle2.jpeg'
        },
        {
            name: 'beagle3',
            img: 'images/beagle3.jpg'
        },
        {
            name: 'beagle4',
            img: 'images/beagle4.jpg'
        },
        {
            name: 'beagle5',
            img: 'images/beagle5.jpg'
        },
        {
            name: 'beagle1',
            img: 'images/beagle.png'
        },
        {
            name: 'beagle2',
            img: 'images/beagle2.jpeg'
        },
        {
            name: 'beagle3',
            img: 'images/beagle3.jpg'
        },
        {
            name: 'beagle4',
            img: 'images/beagle4.jpg'
        },
        {
            name: 'beagle5',
            img: 'images/beagle5.jpg'
        }
    ]

    cards.sort(() => 0.5 - Math.random())

    //get the grid all set up according to my css
    const grid = document.querySelector('.grid')

    //get the final score variable/text set up
    const final = document.querySelector('#finalscore')

    //placeholder arrays for chosen card, its id, and what we've won
    let chosen = []
    let chosenid = []
    let won = []

    //create the board
    function create() {
        //for loop to create the board and fill it with blanks to start.
        for (let i = 0; i < cards.length; i++) {
            const card = document.createElement('img')
            card.setAttribute('src', 'images/blank.jpg')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flip)
            grid.appendChild(card)
        }
    }

    //function to check for matches
    function matches() {
        const cards = document.querySelectorAll('img')

        //hold the ids of the selected images
        const oneid = chosenid[0]
        const twoid = chosenid[1]

        //if clicked the same image twice
        if(oneid == twoid) {
            cards[oneid].setAttribute('src', 'images/blank.jpg')
            cards[twoid].setAttribute('src', 'images/blank.jpg')
            //show alert you did so, then flip back
            alert('This is the same image!')
        }
        //found the match
        else if (chosen[0] === chosen[1]) {
            alert('Beagle Match!')
            //change to stars
            cards[oneid].setAttribute('src', 'images/star.png')
            cards[twoid].setAttribute('src', 'images/star.png')
           //flip
            cards[oneid].removeEventListener('click', flip)
            cards[twoid].removeEventListener('click', flip)
            //push into the won array
            won.push(chosen)
        }
        //wrong image
        else {
            //flip back
            cards[oneid].setAttribute('src', 'images/blank.jpg')
            cards[twoid].setAttribute('src', 'images/blank.jpg')
            //try again
            alert('Try again!')
        }
        //reset the arrays
        chosen = []
        chosenid = []
        //update the score
        final.textContent = won.length

        //if the score is half the card array length - you won
        if  (won.length === cards.length/2) {
            //alert the user
            final.textContent = 'Yay, you matched all the beagles!'
        }
    }

    //flip the card
    function flip() {
        let cardId = this.getAttribute('data-id')
        chosen.push(cards[cardId].name)
        chosenid.push(cardId)
        this.setAttribute('src', cards[cardId].img)
        if (chosen.length ===2) {
            setTimeout(matches, 500)
        }
    }

    create()
})