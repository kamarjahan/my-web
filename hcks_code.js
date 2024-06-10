document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('code-form');
    const resultSection = document.getElementById('result');
    const codeInput = document.getElementById('code');
    const resultMessage = document.getElementById('result-message');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        if (codeInput.value === '153423') {
            const urlParams = new URLSearchParams(window.location.search);
            const username = urlParams.get('username');
            const randomPassword = Math.random().toString(36).slice(-8);

            resultMessage.textContent = `Username: ${username}, Password: ${randomPassword}`;
            form.style.display = 'none';
            resultSection.style.display = 'block';
        } else {
            alert('Invalid code. Please try again.');
        }
    });
});
