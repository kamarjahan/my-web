const startButton = document.getElementById('start-button');
const progress = document.getElementById('progress');
const speedRange = document.getElementById('speedRange');

startButton.addEventListener('click', () => {
    startButton.disabled = true;
    let count = 0;
    const interval = setInterval(() => {
        count += 1;
        const speed = count + " Mbps";
        progress.style.transform = `rotate(${(count / 100) * 180}deg)`;
        speedRange.textContent = speed;

        if (count >= 100) {
            clearInterval(interval);
            startButton.disabled = false;
        }
    }, 50);
});
