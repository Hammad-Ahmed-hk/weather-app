# 🌤️ Weather App

A small web app that shows the current temperature and conditions for any city, using [WeatherAPI](https://www.weatherapi.com/).

Built with plain HTML, CSS and JavaScript (Fetch API). No build step or dependencies.

## Features

- Search current weather by city name
- Shows temperature (°C) and condition (e.g. Sunny, Cloudy)
- Press Enter or click the button to search
- Clear error messages for an unknown city or a missing API key
- Responsive black and gold theme

## Getting started

1. Get a free API key from [weatherapi.com](https://www.weatherapi.com/).
2. Clone the repository:
   ```bash
   git clone https://github.com/Hammad-Ahmed-hk/weather-app.git
   cd weather-app
   ```
3. Create your local config file and add your key:
   ```bash
   cp config.example.js config.js
   ```
   Then edit `config.js` and replace `YOUR_WEATHERAPI_KEY` with your key.
4. Open `index.html` in your browser.

## Project structure

```
weather-app/
├── index.html          # Page markup
├── style.css           # Styling
├── script.js           # Fetches and displays weather data
├── config.example.js   # Template for your API key (copy to config.js)
└── .gitignore          # Keeps config.js out of git
```

## Security note

This is a front-end only app, so any key it uses can be seen by anyone who opens the page. Use a free-tier key, restrict it in the WeatherAPI dashboard if possible, and never commit `config.js`. For a public deployment, send requests through a small backend or serverless function that holds the key instead.

## Author

Hammad Ahmed, [@Hammad-Ahmed-hk](https://github.com/Hammad-Ahmed-hk)
