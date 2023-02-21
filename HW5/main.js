// create an array of pictures that go with the correct tags
var imageTags = ["image1", "image2", "image3", "image4", "image5",
    "image6","image7", "image8", "image9", "image10"];
// blank images
var blankImagePath = "images/blank.jpg";
// actuall images
var actualImages = new Array();

function printBlanks()
{
    // random image array now
    createRandomImageArray();
    // for loop goes next
    for(var i = 0; i < imageTags.length; i++)
    {
        document.getElementById(imageTags[i]).src= blankImagePath;
    }



}

function createRandomImageArray()
{
    // array of actual images
    var actualImagePath = ["images/beagle.png", "images/beagle2.jpeg", "images/beagle3.jpg", "images/beagle4.jpg", "images/beagle5.jpg"];

    var count = [0,0,0,0];

    while(actualImages.length < 10)
    {

        var randomNumber = Math.floor(Math.random() * actualImagePath.length)

        if(count[randomNumber] < 2)
        {
            actualImages.push(actualImagePath[randomNumber]);

            count[randomNumber] = count[randomNumber] + 1;
        }
    }





}

function flipImage(number)
{
    document.getElementById(imageTags[number]).src= actualImages[number];


}