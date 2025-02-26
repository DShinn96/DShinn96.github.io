const apiKey = "71526c56f1aad163c727b5c4d1551d1c";

const weatherApiUrl = "https://api.openweathermap.org/data/2.5/weather";

async function fetchWeather(city, country) {
  const queryParams = new URLSearchParams({
    q: `${city}, ${country}`,
    appid: apiKey,
    units: "imperial",
  });

  try {
    const response = await fetch(`${weatherApiUrl}?${queryParams}`);
    if (!response.ok)
      throw new Error("Weather data fetch failed: ${response.statusText}");
    const weatherData = await response.json();
    updateWeatherUI(weatherData);
  } catch (error) {
    console.error(error);
    alert(error.message);
  }
}

function updateWeatherUI(weatherData) {
  const weatherResultDiv = document.getElementById("weather-result");
  // Clear previous results
  weatherResultDiv.innerHTML = "";
  // Bootstrap card for weather data
  const weatherCard = `
    <div class=card">
        <div class="card-body">
            <h5 class="card-title">${weatherData.name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${weatherData.weather[0].main}</h6>
            <p class="card-text">Temperature: ${weatherData.main.temp}°F</p>
            <p class="card-text">Feels like: ${weatherData.main.feels_like}°F</p>
            <p class="card-text">Wind Speed: ${weatherData.wind.speed} mph</p>
            <p class="card-text">Humidity: ${weatherData.main.humidity}%</p>
        </div>
    </div>
    `;
  weatherResultDiv.innerHTML = weatherCard;
}

document.getElementById("search-btn").addEventListener("click", () => {
  const cityInput = document.getElementById("city-input").value.trim();
  const countryInput = document
    .getElementById("country-input")
    .value.trim()
    .toLowerCase();
  if (cityInput && countryInput) {
    fetchWeather(cityInput, countryInput);
  } else {
    alert("Please enter both city and country code.");
  }
});
