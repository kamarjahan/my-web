// Define your variables here
var welcomeMessage = "KAMARJAHAN SEARCH ENGINE";
var googleSearchURL = "https://www.google.com/search?q=";
var pageTitle = "KAMARJAHAN SEARCH ENGINE";
var headingText = "KAMARJAHAN SEARCH ENGINE";

// Set the page title and heading text
document.title = pageTitle;
document.getElementById('heading').innerText = headingText;

function showSuggestions(value) {
    const suggestions = document.getElementById('suggestions');
    suggestions.innerHTML = '';

    if (value.length >= 3) {
        const predefinedSuggestions = [
            'YouTube',
            'Gmail',
            'Drive',
            'Google',
            'Google Maps',
            'Google Translate',
            'Google News',
            'Google Photos',
            'Google Calendar',
            'Facebook',
            'Twitter',
            'Instagram',
            'LinkedIn',
            'WhatsApp',
            'Snapchat',
            'Pinterest',
            'Reddit',
            'TikTok',
            'Amazon',
            'eBay',
            'Walmart',
            'Best Buy',
            'Target',
            'Netflix',
            'Hulu',
            'Disney+',
            'Spotify',
            'Apple Music',
            'SoundCloud',
            'Pandora',
            'Dropbox',
            'Slack',
            'Zoom',
            'Microsoft Teams',
            'Skype',
            'GitHub',
            'Stack Overflow',
            'Quora',
            'Wikipedia',
            'CNN',
            'BBC',
            'The New York Times',
            'The Guardian',
            'Forbes',
            'Bloomberg',
            'Yahoo',
            'Bing',
            'DuckDuckGo',
            'Weather',
            'News',
            'Sports',
            'Movies',
            'Music',
            'Games',
            'Recipes',
            'Travel',
            'Hotels',
            'Flights',
            'Restaurants'
        ];

        predefinedSuggestions.forEach(suggestion => {
            if (suggestion.toLowerCase().includes(value.toLowerCase())) {
                const suggestionElement = document.createElement('div');
                suggestionElement.classList.add('suggestion');
                suggestionElement.textContent = suggestion;
                suggestionElement.onclick = () => {
                    document.getElementById('search-input').value = suggestion;
                    suggestions.style.display = 'none';
                };
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
