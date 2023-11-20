function login(event) {
    event.preventDefault();

    // Get form values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Get existing users from local storage
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

    // Check if the entered username and password match a stored user
    const user = existingUsers.find(u => u.username === username && u.password === password);

    if (user) {
        // Store the logged-in user information in local storage
        localStorage.setItem('loggedInUser', JSON.stringify(user));

        alert('Login successful!');
        // Redirect to the dashboard page
        window.location.href = 'index.html';
    } else {
        alert('Invalid username or password. Please try again.');
    }
}
