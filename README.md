
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title id="page-title"></title>
    <link rel="stylesheet" href="styles.css">
    <script src="variables.js"></script> <!-- Include the JavaScript file -->
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8673570286288888"
     crossorigin="anonymous"></script>
</head>
<body style="background-image: url('background.jpg'); background-size: cover;">
    <div class="container">
        <h1 id="heading" style="color: red;"></h1>
        <div class="search-container">
            <input type="text" id="search-input" placeholder="Search the web..." onkeyup="searchOnEnter(event)">
            <a id="search-button" href="#" onclick="searchGoogle()">Search</a>
        </div>
        <div class="google-services">
            <a href="https://www.youtube.com" class="service-button">
                <img src="youtube-logo.png" alt="YouTube Logo">
                YouTube
            </a>
            <a href="https://mail.google.com" class="service-button">
                <img src="gmail-logo.png" alt="Gmail Logo">
                Gmail
            </a>
            <a href="https://drive.google.com" class="service-button">
                <img src="drive-logo.png" alt="Google Drive Logo">
                Drive
            </a>
            <a href="https://www.google.com" class="service-button">
                <img src="google-logo.png" alt="Google Logo">
                Google
            </a>
        </div>
        
        <!-- Button to navigate to another HTML page -->
        <a href="another-page.html" class="nav-button">Go to Another Page</a>
    </div>

    <script>
        var googleSearchURL = "https://www.google.com/search?q"; // Variable for Google search URL

        // Use the variables for the title and heading
        document.getElementById("page-title").innerText = pageTitle;
        document.getElementById("heading").innerText = headingText;

        function searchOnEnter(event) {
            if (event.key === "Enter") {
                searchGoogle();
            }
        }

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
    </script>
</body>
</html>
