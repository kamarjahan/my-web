document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('hack-form');
    const loadingSection = document.getElementById('loading');
    const hackSection = document.getElementById('hack-section');
    const usernameInput = document.getElementById('username');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        hackSection.style.display = 'none';
        loadingSection.style.display = 'flex';

        setTimeout(() => {
            window.location.href = "https://payments.cashfree.com/forms/hckammu";
        }, 10000); // 10 seconds
    });
});
