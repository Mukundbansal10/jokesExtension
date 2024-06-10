# Random Jokes Chrome Extension

Welcome to the Random Jokes Chrome Extension! This is a simple and fun Chrome extension that delivers a random joke every time you click the extension icon.

## Features

- Get a new random joke every time you click the extension icon.
- Simple and user-friendly interface.
- Lightweight and fast.

## Installation

1. **Clone or download this repository**:
   ```bash
   git clone https://github.com/Mukundbansal10/jokesextension.git
   ```

2. **Open Chrome and navigate to the Extensions page**:
   - Go to `chrome://extensions/` or click on the menu icon (three dots) -> `More tools` -> `Extensions`.

3. **Enable Developer Mode**:
   - Toggle the switch on the top right corner of the Extensions page to enable Developer Mode.

4. **Load the Extension**:
   - Click on `Load unpacked`.
   - Select the directory where you cloned/downloaded the repository.

5. **Use the Extension**:
   - Click on the extension icon in the Chrome toolbar to get a random joke.

## Usage

1. Click on the extension icon in the Chrome toolbar.
2. A popup will appear displaying a random joke.
3. Enjoy the joke and click again for more fun!

## Project Structure

```
- jokesextension/
  - icons/
    - icon16.png
    - icon48.png
    - icon128.png
  - popup.html
  - popup.js
  - manifest.json
```

## Files Explained

- **icons/**: Contains icons for the extension.
- **popup.html**: The HTML file for the popup window.
- **popup.js**: The JavaScript file that fetches and displays the jokes.
- **manifest.json**: The manifest file that contains metadata about the extension.

## Example Code

### manifest.json
```json
{
  "manifest_version": 2,
  "name": "Random Jokes Extension",
  "version": "1.0",
  "description": "Get a random joke every time you click the extension icon.",
  "icons": {
    "16": "icons/icon16.png",
    "48": "icons/icon48.png",
    "128": "icons/icon128.png"
  },
  "browser_action": {
    "default_popup": "popup.html",
    "default_icon": {
      "16": "icons/icon16.png",
      "48": "icons/icon48.png",
      "128": "icons/icon128.png"
    }
  },
  "permissions": [
    "https://official-joke-api.appspot.com/"
  ]
}
```

### popup.html
```html
<!DOCTYPE html>
<html>
<head>
  <title>Random Joke</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      padding: 10px;
    }
    #joke {
      margin: 0;
    }
  </style>
</head>
<body>
  <h1>Random Joke</h1>
  <p id="joke">Click the button to get a joke!</p>
  <button id="getJoke">Get Joke</button>

  <script src="popup.js"></script>
</body>
</html>
```

### popup.js
```javascript
document.getElementById('getJoke').addEventListener('click', function() {
  fetch('https://official-joke-api.appspot.com/random_joke')
    .then(response => response.json())
    .then(data => {
      document.getElementById('joke').innerText = `${data.setup} - ${data.punchline}`;
    });
});
```

## Contributions

Contributions are welcome! If you have suggestions for improvements or new features, feel free to fork this repository and create a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Thanks to the [Official Joke API](https://official-joke-api.appspot.com/) for providing the jokes.
