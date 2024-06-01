// Define your variables here
var welcomeMessage = "KAMARJAHAN SEARCH ENGINE";
var googleSearchURL = "https://www.google.com/search?q=";
var pageTitle = "KAMARJAHAN SEARCH ENGINE";
var headingText = "KAMARJAHAN SEARCH ENGINE";

// Set the page title and heading text
document.title = pageTitle;
document.getElementById('heading').innerText = headingText;

// Functions to show modals
function showSignIn() {
    document.getElementById('sign-in-modal').style.display = 'flex';
}

function showSignUp() {
    document.getElementById('sign-up-modal').style.display = 'flex';
}

// Function to close modals
function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Function to sign up
function signUp() {
    const email = document.getElementById('sign-up-email').value;
    const password = document.getElementById('sign-up-password').value;
    const messageElement = document.getElementById('sign-up-message');

    if (email && password) {
        localStorage.setItem(email, password);
        messageElement.textContent = 'Sign Up Successful!';
        messageElement.style.color = 'green';
    } else {
        messageElement.textContent = 'Please fill in all fields.';
        messageElement.style.color = 'red';
    }
}

// Function to sign in
function signIn() {
    const email = document.getElementById('sign-in-email').value;
    const password = document.getElementById('sign-in-password').value;
    const messageElement = document.getElementById('sign-in-message');

    const storedPassword = localStorage.getItem(email);

    if (storedPassword === password) {
        messageElement.textContent = 'Sign In Successful!';
        messageElement.style.color = 'green';
    } else {
        messageElement.textContent = 'Incorrect email or password.';
        messageElement.style.color = 'red';
    }
}

// Function to show search suggestions
function showSuggestions(value) {
    const suggestions = document.getElementById('suggestions');
    suggestions.innerHTML = '';

    if (value.length >= 3) {
        const predefinedSuggestions = [
            { name: 'YouTube', logo: 'youtube-logo.png', link: 'https://www.youtube.com' },
            { name: 'Gmail', logo: 'gmail-logo.png', link: 'https://mail.google.com' },
            { name: 'Drive', logo: 'drive-logo.png', link: 'https://drive.google.com' },
            { name: 'Google', logo: 'google-logo.png', link: 'https://www.google.com' }
        ];

        predefinedSuggestions.forEach(suggestion => {
            if (suggestion.name.toLowerCase().includes(value.toLowerCase())) {
                const suggestionElement = document.createElement('a');
                suggestionElement.href = suggestion.link;
                suggestionElement.classList.add('suggestion');

                const logoImg = document.createElement('img');
                logoImg.src = suggestion.logo;
                logoImg.alt = suggestion.name + ' Logo';
                suggestionElement.appendChild(logoImg);

                const nameSpan = document.createElement('span');
                nameSpan.textContent = suggestion.name;
                suggestionElement.appendChild(nameSpan);

                suggestions.appendChild(suggestionElement);
            }
        });

        suggestions.style.display = 'block';
    } else {
        suggestions.style.display = 'none';
    }
}

// Function to search Google
function searchGoogle() {
    const searchInput = document.getElementById('search-input').value;

    if (searchInput.trim() === '') {
        alert('Search is empty. Please enter a search query.');
    } else {
        const searchQuery = encodeURIComponent(searchInput);
        const fullGoogleSearchURL = `${googleSearchURL}=${searchQuery}`;
        window.location.href = fullGoogleSearchURL;
    }
}
