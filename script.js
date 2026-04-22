async function getWeather() {
    const location = document.getElementById("locationInput").value;

    if (location === "") {
        alert("Please enter a city name");
        return;
    }

    const apiKey = "3b6f83b3386a4b9ba1b185406262204";
    const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=yes`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        document.getElementById("cityName").innerText =
            data.location.name + ", " + data.location.country;

        document.getElementById("temperature").innerText =
            "Temperature: " + data.current.temp_c + "°C";

        document.getElementById("condition").innerText =
            "Condition: " + data.current.condition.text;

    } catch (error) {
        alert("Error fetching data. Check city name.");
        console.error(error);
    }
}