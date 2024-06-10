document.getElementById('proceed-btn').addEventListener('click', function() {
    var code = document.getElementById('code').value;
    if (code === '153423') {
        document.getElementById('payment-info').classList.add('hidden');
        document.getElementById('result').classList.remove('hidden');

        var username = 'sampleUsername';  // This should be the username entered previously
        var password = 'randomPassword123';  // Generate or use a fixed password
        document.getElementById('result-username').textContent = username;
        document.getElementById('result-password').textContent = password;
    } else {
        alert('Invalid code.');
    }
});
