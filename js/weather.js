/*  __      __        _   _            
//  \ \    / /__ __ _| |_| |_  ___ _ _ 
//  \ \/\/ / -_) _` |  _| ' \/ -_) '_|
//  \_/\_/\___\__,_|\__|_||_\___|_|  
*/
let width = screen.width;
const iconElement = document.querySelector('.weatherIcon');
const tempElement = document.querySelector('.weatherValue p');
const descElement = document.querySelector('.weatherDescription p');
const weather = {};
weather.temperature = {
	unit: 'celsius',
};

let tempUnit = 'C';

const KELVIN = 273.15;
const key = 'f34e3cd90afed5b64970ad40c0291583';

if (width > 1101) {
	setPosition();

function setPosition(position) {
	navigator.geolocation.getCurrentPosition(
		pos => {
			getWeather(pos.coords.latitude.toFixed(3), pos.coords.longitude.toFixed(3));
		},
		err => {
			console.error(err);
			getWeather(49, 11.5);
		}
	);
}

function convertTemperature(value, fromUnit, toUnit) {
	if (fromUnit === toUnit) {
	  return value;
	}
	if (fromUnit === 'C' && toUnit === 'F') {
	  return (value * 9) / 5 + 32;
	}
	if (fromUnit === 'F' && toUnit === 'C') {
	  return (value - 32) * 5 / 9;
	}
	return value;
  }

function getWeather(latitude, longitude) {
	let api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&lang=de&appid=${key}`;
	fetch(api)
		.then(function(response) {
			let data = response.json();
			return data;
		})
		.then(function(data) {
			weather.temperature.value = convertTemperature(data.main.temp - KELVIN, 'C', tempUnit);
			weather.description = data.weather[0].description;
			weather.iconId = data.weather[0].icon;
		})
		.then(function() {
			displayWeather();
		});
}

function displayWeather() {
	iconElement.innerHTML = `<img src="assets/icons/Nord/${weather.iconId}.png"/>`;
	tempElement.innerHTML = `${convertTemperature(weather.temperature.value, 'C', tempUnit).toFixed(0)}°<span class="darkfg">${tempUnit}</span>`;
	descElement.textContent = weather.description;
}
}
