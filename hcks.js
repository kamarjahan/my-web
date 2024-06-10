document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('security-test-form');
    const resultsSection = document.getElementById('results');
    const resultMessage = document.getElementById('result-message');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        
        // Simulating a security test
        resultsSection.style.display = 'block';
        resultMessage.textContent = `Security test for username "${username}" completed. No vulnerabilities found.`;
    });
});
