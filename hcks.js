document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('hack-form');
    const loadingSection = document.getElementById('loading');
    const hackSection = document.querySelector('section');
    const usernameInput = document.getElementById('username');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        hackSection.style.display = 'none';
        loadingSection.style.display = 'block';

        setTimeout(() => {
            window.location.href = 'anhck.html?username=' + encodeURIComponent(usernameInput.value);
        }, 10000); // 10 seconds
    });
});
