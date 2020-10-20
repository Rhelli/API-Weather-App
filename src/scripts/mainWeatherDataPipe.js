import * as utility from './domTool';
import * as api from './apiRequest';

const city = 'London';
const appendMainWeatherData = () => {
  api.fetchMainWeatherData(city)
    .then(weatherObject => {
      const mainTempDisplay = document.getElementById('currentTemp');
      const mainLocationDisplay = document.getElementById('currentLocation');
      const mainDatetimeDisplay = document.getElementById('currentDatetime');
      const mainWeatherIcon = document.getElementById('currentForecastIcon');
      const mainWeatherSummary = document.getElementById('currentForecastText');
      const mainWeatherExtraInfo = document.getElementById('currentForecastExtraText');
      mainTempDisplay.innerHTML = `${weatherObject.temp}°`;
      mainLocationDisplay.innerHTML = `${weatherObject.cityName}, ${utility.countryCodeFormatter(weatherObject.country)}`;
      mainDatetimeDisplay.innerHTML = `${weatherObject.datetime}`;
      mainWeatherIcon.classList.add(`wi-owm-${weatherObject.icon}`);
      mainWeatherSummary.innerHTML = `${weatherObject.main}`;
      mainWeatherExtraInfo.innerHTML = utility.capitalize(`${weatherObject.description}`);
    })
}

const appendWeatherDetailsData = () => {
  const listItems = ['feelsLike', 'cloudCover', 'humidity', 'windSpeed', 'uvIndex'];
  api.fetchWeatherDetailsData(city)
    .then(weatherDetails => {
      for (let i = 0; i < listItems.length; i++) {
        const element = document.getElementById(`${listItems[i]}Data`);
        const listItem = `${listItems[i]}`;
        element.innerHTML = `${weatherDetails[listItem]}`;
      }
    })
}

export { appendMainWeatherData, appendWeatherDetailsData };