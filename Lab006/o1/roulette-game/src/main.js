const canvas = document.getElementById('rouletteCanvas');
const ctx = canvas.getContext('2d');

const wheelRadius = 250;
const ballRadius = 10;
const spinDuration = 5000; // milliseconds
let angle = 0;
let spinAngle = 0;
let isSpinning = false;

function drawWheel() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.save();
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.rotate(angle);

    // Draw the wheel segments
    for (let i = 0; i < 36; i++) {
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.arc(0, 0, wheelRadius, (i * Math.PI) / 18, ((i + 1) * Math.PI) / 18);
        ctx.fillStyle = i % 2 === 0 ? '#FF0000' : '#000000';
        ctx.fill();
        ctx.stroke();
    }

    ctx.restore();
}

function drawBall(ballAngle) {
    ctx.save();
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.rotate(ballAngle);
    ctx.beginPath();
    ctx.arc(wheelRadius - ballRadius, 0, ballRadius, 0, Math.PI * 2);
    ctx.fillStyle = '#FFFFFF';
    ctx.fill();
    ctx.restore();
}

function spinWheel() {
    if (!isSpinning) {
        isSpinning = true;
        spinAngle = Math.random() * 360 + 720; // Random spin between 720 and 1080 degrees
        const startTime = performance.now();

        function animate(time) {
            const elapsed = time - startTime;
            const progress = Math.min(elapsed / spinDuration, 1);
            angle += (spinAngle * progress * Math.PI) / 180;

            drawWheel();
            drawBall(angle);

            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                isSpinning = false;
            }
        }

        requestAnimationFrame(animate);
    }
}

canvas.addEventListener('click', spinWheel);
drawWheel();