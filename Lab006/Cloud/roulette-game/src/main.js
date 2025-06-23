const canvas = document.getElementById('rouletteCanvas');
const ctx = canvas.getContext('2d');

canvas.width = 600;
canvas.height = 600;

let angle = 0;
let speed = 0.1;
let ballAngle = 0;
let ballSpeed = 0.2;
let ballRadius = 10;
let ballX = canvas.width / 2;
let ballY = canvas.height / 2;

function drawWheel() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.save();
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.rotate(angle);

    for (let i = 0; i < 36; i++) {
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.arc(0, -250, 50, 0, Math.PI / 18);
        ctx.fillStyle = (i % 2 === 0) ? '#FF0000' : '#000000';
        ctx.fill();
        ctx.rotate(Math.PI / 18);
    }

    ctx.restore();
}

function drawBall() {
    ctx.beginPath();
    ctx.arc(ballX, ballY, ballRadius, 0, Math.PI * 2);
    ctx.fillStyle = '#FFFFFF';
    ctx.fill();
}

function update() {
    angle += speed;
    ballAngle += ballSpeed;

    ballX = canvas.width / 2 + 150 * Math.cos(ballAngle);
    ballY = canvas.height / 2 + 150 * Math.sin(ballAngle);

    drawWheel();
    drawBall();
    requestAnimationFrame(update);
}

update();