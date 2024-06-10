document.getElementById('hack-btn').addEventListener('click', function() {
    var username = document.getElementById('username').value;
    if (username) {
        document.getElementById('hacking-form').classList.add('hidden');
        document.getElementById('loading-screen').classList.remove('hidden');

        setTimeout(function() {
            window.location.href = 'anhck.html';
        }, 10000);
    } else {
        alert('Please enter a username.');
    }
});
