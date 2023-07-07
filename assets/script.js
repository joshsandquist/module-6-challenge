var APIKey = '73cac212d998043d18f6cc88473fb507';

// Query selectors for buttons
var submitButtonEl = document.querySelector('#submitBtn');
var cityInputEl = document.querySelector('#cityInput');
var currentWeatherEl = document.querySelector('#current-weather');
var forecastEl = document.querySelector('#forecast');
var searchHistoryEl = document.querySelector('#search-history');

// data from the API is set to Kelvin, so this function will convert it to Fahrenheit
function KelvinToFahrenheit(kelvin) {
  return (kelvin - 273.15) * 9/5 + 32;
}



// Function to fetch and display current weather data from the openweather api
function displayCurrentWeather(city) {
  var cityDataUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}`;

  fetch(cityDataUrl)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      // Clear previous current weather data
      currentWeatherEl.innerHTML = '';

      // Create all needed weather elements
      var cityNameEl = document.createElement('h3');
      cityNameEl.textContent = data.name;

      var dateEl = document.createElement('p');
      var currentDate = new Date();
      dateEl.textContent = currentDate.toDateString();
      // Gathering the 
      var iconEl = document.createElement('img');
      var icon = data.weather[0].icon;
      iconEl.src = `https://openweathermap.org/img/w/${icon}.png`;

      var tempEl = document.createElement('p');
      var temperature = data.main.temp;
      // Using Math.round to round the temperature data
      tempEl.textContent = `Temperature: ${Math.round(temperature)}°F`;

      var humidityEl = document.createElement('p');
      var humidity = data.main.humidity;
      humidityEl.textContent = `Humidity: ${humidity}%`;

      var windSpeedEl = document.createElement('p');
      var windSpeed = data.wind.speed;
      windSpeedEl.textContent = `Wind Speed: ${windSpeed} mph`;

      // Append current weather elements to the container
      currentWeatherEl.appendChild(cityNameEl);
      currentWeatherEl.appendChild(dateEl);
      currentWeatherEl.appendChild(iconEl);
      currentWeatherEl.appendChild(tempEl);
      currentWeatherEl.appendChild(humidityEl);
      currentWeatherEl.appendChild(windSpeedEl);
    });
}