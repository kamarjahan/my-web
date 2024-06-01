// Define your variables here
var welcomeMessage = "KAMARJAHAN SEARCH ENGINE";
var googleSearchURL = "https://www.google.com/search?q=";
var pageTitle = "KAMARJAHAN SEARCH ENGINE";
var headingText = "KAMARJAHAN SEARCH ENGINE";

// Set the page title and heading text
document.title = pageTitle;
document.getElementById('page-title').innerText = pageTitle;
document.getElementById('heading').innerText = headingText;

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

function searchGoogle() {
    const searchInput = document.getElementById('search-input').value;

    if (searchInput.trim() === '') {
        alert('Search is empty. Please enter a search query.');
    } else {
        const searchQuery = encodeURIComponent(searchInput);
        const fullGoogleSearchURL = `${googleSearchURL}${searchQuery}`;
        window.location.href = fullGoogleSearchURL;
    }
}
