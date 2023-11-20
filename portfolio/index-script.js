document.addEventListener('DOMContentLoaded', function () {
    // Check if the user is logged in
    if (!isUserLoggedIn()) {
        // Redirect to the login page if not logged in
        window.location.href = 'login.html';
    } else {
        // Display the logged-in user information
        displayUserInfo();
    }
});

function isUserLoggedIn() {
    // Check if the user is logged in based on your authentication criteria
    // In this example, we'll use a simple check if a user is present in local storage
    const user = JSON.parse(localStorage.getItem('loggedInUser'));
    return user !== null;
}

function displayUserInfo() {
    // Get the user information from local storage
    const user = JSON.parse(localStorage.getItem('loggedInUser'));

    // Display the username and email in the user-info div
    const userInfoElement = document.querySelector('.user-info');
    userInfoElement.innerHTML = `Welcome, ${user.username} (${user.email})`;
}

function logout() {
    // Remove the logged-in user information from local storage
    localStorage.removeItem('loggedInUser');

    // Redirect to the login page after logout
    window.location.href = 'login.html';
}
