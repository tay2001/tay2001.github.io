const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Set canvas background color to light grey
ctx.fillStyle = '#d3d3d3';
ctx.fillRect(0, 0, canvas.width, canvas.height);

// Define rectangle objects
const objects = [
    {x: Math.random()*canvas.width, y: Math.random()*canvas.height, w: 50, h: 50, color: '#808080'},
    {x: Math.random()*canvas.width, y: Math.random()*canvas.height, w: 50, h: 50, color: '#808080'},
    {x: Math.random()*canvas.width, y: Math.random()*canvas.height, w: 50, h: 50, color: '#808080'},
    {x: Math.random()*canvas.width, y: Math.random()*canvas.height, w: 50, h: 50, color: '#808080'},
    {x: Math.random()*canvas.width, y: Math.random()*canvas.height, w: 50, h: 50, color: '#808080'},
    // Player object
    {x: Math.random()*canvas.width, y: Math.random()*canvas.height, w: 50, h: 50, color: '#8b0000', isPlayer: true},
];

// Define score variable
let score = 0;

// Draw objects on canvas
function drawObjects() {
    for (let obj of objects) {
        ctx.fillStyle = obj.color;
        ctx.fillRect(obj.x, obj.y, obj.w, obj.h);
    }
}

// Move player object using arrow keys
function movePlayer(e) {
    let player = objects.find(obj => obj.isPlayer);
    switch (e.keyCode) {
        case 37: // left arrow
            // Check for collision with grey objects to the left
            let collidesLeft = objects.some(obj => obj !== player &&
                player.x - 10 < obj.x + obj.w &&
                player.x + player.w > obj.x &&
                player.y < obj.y + obj.h &&
                player.y + player.h > obj.y);
            if (!collidesLeft) {
                player.x -= 10;
            }
            break;
        case 38: // up arrow
            // Check for collision with grey objects above
            let collidesAbove = objects.some(obj => obj !== player &&
                player.x < obj.x + obj.w &&
                player.x + player.w > obj.x &&
                player.y - 10 < obj.y + obj.h &&
                player.y + player.h > obj.y);
            if (!collidesAbove) {
                player.y -= 10;
            }
            break;
        case 39: // right arrow
            // Check for collision with grey objects to the right
            let collidesRight = objects.some(obj => obj !== player &&
                player.x + 10 < obj.x + obj.w &&
                player.x + player.w > obj.x &&
                player.y < obj.y + obj.h &&
                player.y + player.h > obj.y);
            if (!collidesRight) {
                player.x += 10;
            }
            break;
        case 40: // down arrow
            // Check for collision with grey objects below
            let collidesBelow = objects.some(obj => obj !== player &&
                player.x < obj.x + obj.w &&
                player.x + player.w > obj.x &&
                player.y + 10 < obj.y + obj.h &&
                player.y + player.h > obj.y);
            if (!collidesBelow) {
                player.y += 10;
            }
            break;
    }
}


// Detect collisions between player object and blue objects
function detectCollisions() {
    let player = objects.find(obj => obj.isPlayer);
    for (let obj of blueObjects) {
        if (player.x < obj.x + obj.w &&
            player.x + player.w > obj.x &&
            player.y < obj.y + obj.h &&
            player.y + player.h > obj.y) {
            // Collision detected, remove blue object and update score
            blueObjects.splice(blueObjects.indexOf(obj), 1);
            score++;
            document.getElementById('score').innerHTML = 'Score: ' + score;
        }
    }
}

// Define blue rectangle objects
const blueObjects = [
    {x: Math.random()*canvas.width, y: Math.random()*canvas.height, w: 50, h: 50, color: '#ADD8E6'},
    {x: Math.random()*canvas.width, y: Math.random()*canvas.height,
        w: 50, h: 50, color: '#ADD8E6'},
    {x: Math.random()*canvas.width, y: Math.random()*canvas.height, w: 50, h: 50, color: '#ADD8E6'},
];

// Draw blue objects on canvas
function drawBlueObjects() {
    for (let obj of blueObjects) {
        ctx.fillStyle = obj.color;
        ctx.fillRect(obj.x, obj.y, obj.w, obj.h);
    }
}

// Update canvas every 30 milliseconds
setInterval(function() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // Redraw canvas background
    ctx.fillStyle = '#d3d3d3';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    // Draw objects on canvas
    drawObjects();
    drawBlueObjects();
    // Detect collisions between player object and blue objects
    detectCollisions();
}, 30);

// Add event listener for arrow keys to move player object
document.addEventListener('keydown', movePlayer);

const restartButton = document.getElementById('restart-button');
restartButton.addEventListener('click', function() {
    location.reload();
});