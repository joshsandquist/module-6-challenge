var APIKey = '73cac212d998043d18f6cc88473fb507';
var submitButtonEl = document.querySelector('#submitBtn');
var cityInputEl = document.querySelector('#cityInput');
var cities = [];

submitButtonEl.addEventListener('click', function() {
  var city = cityInputEl.value;
  var cityDataUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + APIKey;
  cities.push(cityDataUrl);
  localStorage.setItem('cities', JSON.stringify(cities));
});

var cities = JSON.parse(localStorage.getItem('cities'));
if (cities) {
  cities.forEach(function(cityDataUrl) {
    fetch(cityDataUrl)
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        
      })
  });
}