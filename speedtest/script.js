const startButton = document.getElementById('start-button');
const downloadSpeedElement = document.getElementById('download-speed');
const uploadSpeedElement = document.getElementById('upload-speed');

startButton.addEventListener('click', () => {
    startButton.disabled = true;

    // Simulated file sizes in MB
    const downloadSize = 10; // MB
    const uploadSize = 5; // MB

    const downloadSpeed = calculateSpeed(downloadSize);
    const uploadSpeed = calculateSpeed(uploadSize);

    downloadSpeedElement.textContent = downloadSpeed.toFixed(2);
    uploadSpeedElement.textContent = uploadSpeed.toFixed(2);

    startButton.disabled = false;
});

function calculateSpeed(fileSize) {
    const startTime = new Date().getTime();
    const downloadSpeed = (fileSize * 8) / ((new Date().getTime() - startTime) / 1000); // Mbps
    return downloadSpeed;
}
