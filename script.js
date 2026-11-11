// The API key is NOT stored in this file.
// Copy config.example.js to config.js and put your own WeatherAPI key there.
// config.js is listed in .gitignore so it is never committed.

async function getWeather() {
    const input = document.getElementById("locationInput");
    const location = input.value.trim();

    if (location === "") {
        alert("Please enter a city name");
        return;
    }

    const apiKey = window.APP_CONFIG && window.APP_CONFIG.WEATHER_API_KEY;
    if (!apiKey || apiKey === "YOUR_WEATHERAPI_KEY") {
        alert("Missing API key. Copy config.example.js to config.js and add your key.");
        return;
    }

    const url =
        "https://api.weatherapi.com/v1/current.json" +
        `?key=${encodeURIComponent(apiKey)}` +
        `&q=${encodeURIComponent(location)}&aqi=yes`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        // WeatherAPI reports problems (bad city, bad key) as { error: { message } }
        if (!response.ok || data.error) {
            const message = data.error ? data.error.message : "Request failed";
            alert(message);
            return;
        }

        document.getElementById("cityName").innerText =
            data.location.name + ", " + data.location.country;

        document.getElementById("temperature").innerText =
            "Temperature: " + data.current.temp_c + "°C";

        document.getElementById("condition").innerText =
            "Condition: " + data.current.condition.text;
    } catch (error) {
        alert("Network error. Please check your connection and try again.");
        console.error(error);
    }
}

// Allow pressing Enter to search
document.getElementById("locationInput").addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        getWeather();
    }
});
