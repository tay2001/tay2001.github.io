var images = ["img/s8.jpg","img/s9.jpg","img/s10.jpg","img/s11.jpg","img/s12.jpg","img/s13.png"];
var texts = ["\"The world would be a nicer place if everyone had the ability to love as unconditionally as a dog.\" -M.K. Clinton", "\"Happiness is a warm puppy.\" -Charles M. Schulz", "\"A dog is the only thing on earth that loves you more than he loves himself.\" -Josh Billings"];
var shapes = ["circle", "rect", "polygon"];
var colors = ["rgba(93,66,49,0.99)", "rgba(17,17,12,0.99)", "#F7D8AE"];

var currentIndex = 0;

function changeImage() {
    $("#image").fadeOut(2000, function() {
        currentIndex++;
        if (currentIndex == images.length) {
            currentIndex = 0;
        }
        $("#image").attr("src", images[currentIndex]).fadeIn(2000);
    });
}

function changeText() {
    var size = Math.floor(Math.random() * 2)
    $("#text").fadeOut(2000, function() {
        if (currentIndex == texts.length - 1) {
            currentIndex = 0;
        } else {
            currentIndex++;
        }
        if (size == 0){
            $("#text").css("fontSize", "40px")
        }
        else{
            $("#text").css("fontSize", "16px");
        }
        $("#text").text(texts[currentIndex]).fadeIn(2000);
    });
}



function changeShape() {
    $(".container svg:last-child").remove();
    var shape = shapes[Math.floor(Math.random() * shapes.length)];
    var color = colors[Math.floor(Math.random() * colors.length)];
    var size = Math.floor(Math.random() * 100) + 50;
    var containerOffset = $(".container").offset();
    var x = Math.floor(Math.random() * $(".container").width()) + containerOffset.left;
    var y = Math.floor(Math.random() * $(".container").height()) + containerOffset.top;

    var shapeElement = document.createElementNS("http://www.w3.org/2000/svg", shape);
    shapeElement.setAttribute("fill", color);
    shapeElement.setAttribute("opacity", "0");

    if (shape === "circle") {
        shapeElement.setAttribute("cx", "50");
        shapeElement.setAttribute("cy", "50");
        shapeElement.setAttribute("r", size/2);
    } else if (shape === "rect") {
        shapeElement.setAttribute("x", "0");
        shapeElement.setAttribute("y", "0");
        shapeElement.setAttribute("width", size);
        shapeElement.setAttribute("height", size);
    } else if (shape === "polygon") {
        var points = "";
        points += (50 + size * Math.cos(0 * Math.PI/5)) + "," + (50 + size * Math.sin(0 * Math.PI/5)) + " ";
        points += (50 + size * Math.cos(1 * Math.PI/5)) + "," + (50 + size * Math.sin(1 * Math.PI/5)) + " ";
        points += (50 + size * Math.cos(2 * Math.PI/5)) + "," + (50 + size * Math.sin(2 * Math.PI/5)) + " ";
        points += (50 + size * Math.cos(3 * Math.PI/5)) + "," + (50 + size * Math.sin(3 * Math.PI/5)) + " ";
        points += (50 + size * Math.cos(4 * Math.PI/5)) + "," + (50 + size * Math.sin(4 * Math.PI/5)) + " ";
        shapeElement.setAttribute("points", points);
    }

    // Add the shape to the SVG element and animate it
    var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("width", "100");
    svg.setAttribute("height", "100");
    svg.setAttribute("viewBox", "0 0 100 100");

    svg.appendChild(shapeElement);
    $(".container").append(svg);

// Animate the shape
    $(shapeElement).animate({
        opacity: "1",
        transform: "translate(" + x + "px, " + y + "px)"
    }, 5000, function() {
// After the animation is complete, remove the shape
        $(this).remove();
    });
}

// Define the shapes and colors to use
var shapes = ["circle", "rect", "polygon"];
var colors = ["#FF4136", "#FF851B", "#FFDC00", "#2ECC40", "#0074D9", "#B10DC9", "#F012BE", "#001f3f"];

// Call the changeShape function every 1.5 seconds
setInterval(changeShape, 5000);

// Add a button to manually change the shape
$("#change-shape").click(changeShape);

// Add a button to stop the animation
$("#stop-animation").click(function() {
    clearInterval();
});




setInterval(changeImage, 10000);
setInterval(changeText, 7000);
