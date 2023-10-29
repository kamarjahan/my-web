const startButton = document.getElementById('start-button');
const progress = document.getElementById('progress');
const speedText = document.querySelector('.speed-text');

startButton.addEventListener('click', () => {
    startButton.disabled = true;
    let count = 0;
    const interval = setInterval(() => {
        count += 10;
        progress.style.transform = `rotate(${count}deg)`;

        if (count >= 180) {
            clearInterval(interval);
            startButton.disabled = false;
            simulateSpeed(); // Simulating speed change
        }
    }, 100);
});

// Function to simulate speed change
function simulateSpeed() {
    let speed = 0;
    const speedIncrement = 50; // Change in speed

    // Simulate increase in speed (just for demonstration)
    const speedInterval = setInterval(() => {
        speed += speedIncrement;
        if (speed >= 100) {
            speed = 100;
            clearInterval(speedInterval);
        }
        speedText.textContent = speed;
    }, 500); // Change this interval for a more realistic representation (simulated value)
}
