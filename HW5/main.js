//https://www.youtube.com/watch?v=tjyDOHzKN0w was A LOT of help!
//event listener to get cards and scramble


// JSON declaration
var player = {"firstname":"", "lastname":"", "age":0 , "score":5};

// add to the JSON from the textboxes
function addToPlayer()
{
    var firstName = document.getElementById("txtFirstName").value;
    var lastName = document.getElementById("txtLastName").value;
    var age = document.getElementById("txtAge").value;

    player.firstname = firstName;
    player.lastname = lastName;
    player.age = age;
    localStorage.setItem("playerInfo", JSON.stringify(player));
    window.location = "index.html";
}

// get the information out of JSON
function playerInfo()
{
    var playerInformation = localStorage.getItem("playerInfo");
    player = JSON.parse(playerInformation);
    var str = "Name: " + player.firstname + " " + player.lastname + "<br>" +
        "Age: " + player.age + "<br>" + "Score: " + player.score;

    if(document.getElementById("endInformation") != null)
    {
        document.getElementById("endInformation").innerHTML = str;
    }


}



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
    const finalscore = document.querySelector('#finalscore')
    const attempts = document.querySelector('#attempts')

    //placeholder arrays for chosen card, its id, and what we've won
    let chosen = []
    let chosenid = []
    let won = []
    let attempt = []

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
            attempt.push(chosen)
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
            attempt.push(chosen)
            won.push(chosen)
        }
        //wrong image
        else {
            //flip back
            cards[oneid].setAttribute('src', 'images/blank.jpg')
            cards[twoid].setAttribute('src', 'images/blank.jpg')
            //try again
            attempt.push(chosen)
            alert('Try again!')
        }
        //reset the arrays
        chosen = []
        chosenid = []
        //update the score
        finalscore.textContent = won.length
        attempts.textContent = attempt.length

        //if the score is half the card array length - you won
        if  (won.length === cards.length/2) {
            //alert the user
            finalscore.textContent = 'Yay, you matched all the beagles!'
            localStorage.setItem("playerInfo", JSON.stringify(player));
            window.location = "end.html";
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





