// API : https://openweathermap.org/api

// Clé api
const API_KEY = "&appid=4081444b7b90198136fefe6ed4ccf35b";
// Urls API
const API_URL_CURRENT = "https://api.openweathermap.org/data/2.5/weather";
const API_URL_DAILY = "https://api.openweathermap.org/data/2.5/forecast/daily";
// Query param
const q = "?q=";
const cnt3days =  "&cnt=4"; //4 to have day +3 info the first one is the current day
const metric = "&units=metric";
const mode = "&mode=json";

// Base source icon
const API_URL_ICON = "http://openweathermap.org/img/wn/";


class API_WEATHER{
  constructor(city){
    // Si la ville n'est pas définit alors la ville par défault est Paris
    if(city === undefined || city === ''){
      city = "paris";
    }
    this.city = city;
  }

  // Faire la requete à l'API openweathermap
  // Retourne une promise
  fetchTodayForecast(){
    return axios
        .get(API_URL_CURRENT + q + this.city + metric + API_KEY, {
          crossdomain: true
    })
  }

  fetchGetThreeDayForecast() {
    return axios
        .get(API_URL_DAILY + q + this.city + mode + metric + cnt3days + API_KEY, {
            cossdomain: true
        });
  }
  // Retourne l'element HTML de l'icon symbolisant la méteo.
  getHTMLElementFromIcon(icon){
    return `<img src=${API_URL_ICON}${icon}@2x.png class="weather-icon"/>`
  }
}