function signup(event) {
    event.preventDefault();

    // Get form values
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Check if the password meets the criteria
    if (!isPasswordValid(password)) {
        alert('Password must contain at least one numeric digit, one alphabet character, and one special character.');
        return;
    }

    // Create user object
    const user = {
        username: username,
        email: email,
        password: password
    };

    // Get existing users or initialize an empty array
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

    // Check if the username is already taken
    if (existingUsers.some(u => u.username === username)) {
        alert('Username already taken. Please choose a different one.');
        return;
    }

    // Add the new user to the array
    existingUsers.push(user);

    // Store the updated users array in local storage
    localStorage.setItem('users', JSON.stringify(existingUsers));

    alert('Account created successfully. You can now log in.');
    // Optionally redirect to the login page
    // window.location.href = 'login.html';
}

function isPasswordValid(password) {
    // Password must contain at least one numeric digit, one alphabet character, and one special character
    const regex = /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*()_+])[0-9a-zA-Z!@#$%^&*()_+]{8,}$/;
    return regex.test(password);
}
