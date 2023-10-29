const startButton = document.getElementById('start-button');
const progress = document.getElementById('progress');

startButton.addEventListener('click', () => {
    startButton.disabled = true;
    let count = 0;
    const interval = setInterval(() => {
        count += 10;
        progress.style.transform = `rotate(${count}deg)`;

        if (count >= 180) {
            clearInterval(interval);
            startButton.disabled = false;
        }
    }, 100);
});
