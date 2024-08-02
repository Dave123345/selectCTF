const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const box = 20;
let score = 0;
const goal = 100; // Set the goal score

const snake = [];
let food = {};
let d;
let game;
let canPressT = false; // Flag to check if 'T' key press is enabled

// Initialize the game
function initGame() {
    score = 0;
    d = '';
    canPressT = false;
    
    snake.length = 0;
    snake[0] = { x: 9 * box, y: 10 * box };

    food = {
        x: Math.floor(Math.random() * 20) * box,
        y: Math.floor(Math.random() * 20) * box
    };

    if (game) {
        clearInterval(game);
    }

    game = setInterval(draw, 100);
}

// Set up event listeners
document.addEventListener('keydown', direction);
document.addEventListener('keydown', checkKeyPress);
document.getElementById('restartButton').addEventListener('click', initGame);

function direction(event) {
    if (event.keyCode === 37 && d !== 'RIGHT') d = 'LEFT';
    if (event.keyCode === 38 && d !== 'DOWN') d = 'UP';
    if (event.keyCode === 39 && d !== 'LEFT') d = 'RIGHT';
    if (event.keyCode === 40 && d !== 'UP') d = 'DOWN';
}

function checkKeyPress(event) {
    if (event.key === 't' || event.key === 'T') {
        if (score >= 20 && score < goal) {
            window.location.href = 'https://anotepad.com/notes/f329qe53'; // Redirect to the link
        }
    }
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < snake.length; i++) {
        ctx.fillStyle = i === 0 ? 'green' : 'lightgreen';
        ctx.fillRect(snake[i].x, snake[i].y, box, box);
    }

    ctx.fillStyle = 'red';
    ctx.fillRect(food.x, food.y, box, box);

    if (d === 'LEFT') snake[0].x -= box;
    if (d === 'UP') snake[0].y -= box;
    if (d === 'RIGHT') snake[0].x += box;
    if (d === 'DOWN') snake[0].y += box;

    if (snake[0].x < 0) snake[0].x = canvas.width - box;
    if (snake[0].x >= canvas.width) snake[0].x = 0;
    if (snake[0].y < 0) snake[0].y = canvas.height - box;
    if (snake[0].y >= canvas.height) snake[0].y = 0;

    for (let i = 1; i < snake.length; i++) {
        if (snake[i].x === snake[0].x && snake[i].y === snake[0].y) {
            clearInterval(game);
            alert('Game Over!');
        }
    }

    if (snake[0].x === food.x && snake[0].y === food.y) {
        score++;
        food = {
            x: Math.floor(Math.random() * 20) * box,
            y: Math.floor(Math.random() * 20) * box
        };
        snake.push({ x: snake[0].x, y: snake[0].y });

        if (score >= goal) {
            clearInterval(game);
            window.location.href = 'https://anotepad.com/notes/f329qe53'; // Redirect to the link
        }

        if (score >= 20) {
            canPressT = true; // Enable 'T' key press functionality
        }
    }

    ctx.fillStyle = 'black';
    ctx.font = '20px Arial';
    ctx.fillText('Score: ' + score, box, box);

    // Display message if score is 20
    if (score >= 20 && score < goal) {
        ctx.font = '16px Arial';
        ctx.fillStyle = 'blue';
        ctx.fillText('Hammer The T', box, canvas.height - box);
    }
}

// Initialize the game when the page loads
initGame();
