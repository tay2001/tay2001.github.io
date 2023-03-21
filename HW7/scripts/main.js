
// ARRAY
var aVF = new Array();

class ViewFinder {

    constructor(title, author, date, desc, image){

        this.title =  title;
        this.author = author;
        this.year = date;
        this.description = desc;
        this.image = image;
    }

    // method to display Photos
    toString(){

        let str;
        str = this.title + "<br>" + this.author + "<br>" + this.year + "<br>" + this.description +"<br>"
        return str;
    }

    // Rather than 5 getters I combined them into one.
    get details(){
        return this.title + "<br>" + this.author + "<br> " + this.year + "<br>" + this.description +"<br>";
    }

    display_image(){
        document.getElementById('photo').src = this.image
    }
}

function display(){
  let first = new ViewFinder("The Birth of Venus","Sandro Botticelli", "1485-1486", "Goddess Venus arriving at the shore after her birth.", "./imgs/venus.jpg" );

    let second = new ViewFinder("The Creation of Adam","Michelangelo", "1508-1512", "Biblical creation narrative from the Book of Genesis in which God gives life to Adam.", "./imgs/adam.jpg" );

    let third = new ViewFinder("Liberty Leading the People","Eugene Delacroix", "1830", "Commemorating the July Revolution of 1830.", "./imgs/liberty.jpg" );

    let fourth = new ViewFinder("The Starry Night","Vincent van Gogh", "1889", "View from his asylum room at Saint-Remy-de-Provence, before sunrise, with an imaginary village.", "./imgs/night.jpg" );

    let fifth = new ViewFinder("The Great Wave off Kanagawa","Hokusai","1831", "Three boats moving through a storm-tossed sea, with a large wave forming spiral and Mount Fuji visible.", "./imgs/wave.jpg" );


// push them into an array
    aVF.push(newVF);
    aVF.push(second);
    aVF.push(third);
    aVF.push(fourth);
    aVF.push(fifth);
}

// Create new photo and display it
function newVF() {

    // create a variable with random number.
    var rand = Math.floor(Math.random() * aVF.length);

    document.getElementById("details").innerHTML = aVF[rand];
    aVF[rand].display_image();

}