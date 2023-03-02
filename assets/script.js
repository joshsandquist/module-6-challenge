var APIKey = '73cac212d998043d18f6cc88473fb507';
var submitButtonEl = document.querySelector('#submitBtn');
var cityInputEl = document.querySelector('#cityInput');

submitButtonEl.addEventListener('click', function() {
  var city = cityInputEl.value;
  var cityDataUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + APIKey;
  localStorage.setItem(city, cityDataUrl);
});

for (var i = 0; i < localStorage.length; i++) {
  var cityName = localStorage.key(i);
  var cityDataUrl = localStorage.getItem(cityName);
  fetch(cityDataUrl)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      var cityName = data.name;
      var buttonEl = document.createElement('button');
      buttonEl.textContent = cityName;
      buttonEl.classList = ('btn')
      document.querySelector('#searchbar').appendChild(buttonEl);
    })
}