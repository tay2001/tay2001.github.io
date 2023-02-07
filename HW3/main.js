function storyFunction(choice) {
    var answer1 = document.getElementById("choice1").innerHTML;
    var answer2 = document.getElementById("choice2").innerHTML;
    if (choice == 1 && answer1 == "Yes") {
        document.getElementById("story").innerHTML = "Sheldon walks over to the trash can. It has a lid he can push open with his nose. Does he?";
        document.getElementById("choice1").innerHTML = "Open trashcan";
        document.getElementById("choice2").innerHTML = "Keep going";
    } else if (choice == 2 && answer2 == "No") {
        document.getElementById("story").innerHTML = "Sheldon has decided to be good, for once, and goes back to the couch.";
        document.getElementById("choice1").innerHTML = "Lay down and sleep";
        document.getElementById("choice2").innerHTML = "Go to the doggy door";
    } else if (choice == 1 && answer1 == "Open trashcan") {
        document.getElementById("story").innerHTML = "Sheldon buts the can open and sticks his head inside! What does he find?";
        document.getElementById("choice1").innerHTML = "Cheetos";
        document.getElementById("choice2").innerHTML = "An old sock";
    } else if (choice == 2 && answer2 == "Keep going") {
        document.getElementById("story").innerHTML = "Sheldon decides to go to his doggy bowl for some water. He sees his reflection, what does he do?";
        document.getElementById("choice1").innerHTML = "Drink some water";
        document.getElementById("choice2").innerHTML = "Bay at the intruder!";
    } else if (choice == 2 && answer2 == "Go to the doggy door") {
        document.getElementById("story").innerHTML = "Sheldon trots over to the doggy door, will he go out?";
        document.getElementById("choice1").innerHTML = "Yes he goes outside";
        document.getElementById("choice2").innerHTML = "No, he stays inside";
    } else if (choice == 2 && answer2 == "Bay at the intruder!") {
        document.getElementById("story").innerHTML = "Sheldon howls at his reflection in his bowl, baying at the dog.";
        document.getElementById("choice1").innerHTML = "Realize its water";
        document.getElementById("choice2").innerHTML = "Attack!";
    }
    // need to do these
    else if (choice == 1 && answer1 == "Cheetos") {
        document.getElementById("story").innerHTML = "Sheldon devours the cheetos and lays down for a nap." + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Restart";
        document.getElementById("choice2").innerHTML = "Quit";
    } else if (choice == 1 && answer1 == "Lay down and sleep") {
        document.getElementById("story").innerHTML = "Sheldon hops on the couch and curls up to sleep" + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Restart";
        document.getElementById("choice2").innerHTML = "Quit";
    } else if (choice == 1 && answer1 == "Yes he goes outside") {
        document.getElementById("story").innerHTML = "He walks outside and does some zoomies!" + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Restart";
        document.getElementById("choice2").innerHTML = "Quit";
    } else if (choice == 2 && answer2 == "No, he stays inside") {
        document.getElementById("story").innerHTML = "Sheldon decides to look out the window instead." + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Restart";
        document.getElementById("choice2").innerHTML = "Quit";
    } else if (choice == 1 && answer1 == "Realize its water") {
        document.getElementById("story").innerHTML = "Sheldon stops to sniff the bowl as he realizes it is water." + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Restart";
        document.getElementById("choice2").innerHTML = "Quit";
    } else if (choice == 2 && answer2 == "Attack!") {
        document.getElementById("story").innerHTML = "Sheldon leaps at the bowl, getting water everywhere!" + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Restart";
        document.getElementById("choice2").innerHTML = "No quit";
    } else if (choice == 1 && answer1 == "Watch from afar") {
        document.getElementById("story").innerHTML = "Pugster decides it's time to just watch from a distance for safety." + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Yes restart";
        document.getElementById("choice2").innerHTML = "No quit";
    } else if (choice == 2 && answer2 == "Get in closer") {
        document.getElementById("story").innerHTML = "Pugster decides to get just a little closer, but not engage." + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Yes restart";
        document.getElementById("choice2").innerHTML = "Quit";
    } else if (choice == 1 && answer1 == "Restart") {
        document.getElementById("story").innerHTML = "  Sheldon, the beagle, has been left alone for the first time! Are you ready for mischief?";
        document.getElementById("choice1").innerHTML = "Yes";
        document.getElementById("choice2").innerHTML = "No";
    } else if (choice == 2 && answer2 == "Quit") {
        document.getElementById("story").innerHTML = "Sheldon gives you his approval!!";

    }


}