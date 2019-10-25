function start() {

    // Récupérer la ville
    let cityValue = document.getElementById('city-input').value;

    // Création de l'objet apiWeather
    const apiWeather = new API_WEATHER(cityValue);

    // Appel de la fonction fetchTodayForecast
    apiWeather
        .fetchTodayForecast()
        .then(function(response) {
            // Récupère la donnée d'une API
            const data = response.data;

            document.getElementById('current-city').innerHTML = data.name + ', ' + data.sys.country;
            putInformationDay(data, 'today');
    })
        .catch(function(error) {
      // Affiche une erreur
      console.error(error);
    });

    // Appel de la fonction fetchGetThreeDayForecast
    apiWeather
        .fetchGetThreeDayForecast()
        .then(function (response) {
            // recuperation des données au format json
            let data = response.data;

            // get informations
            const list = data.list;

            putInformationDay(list[1], 'tomorrow');
            putInformationDay(list[2], 'after-tomorrow');
            putInformationDay(list[3], 'after-tomorrow2');

        })
        .catch(function (error) {
            console.error(error);
        });
}

function putInformationDay(day, DOMprefix) {

    let main = day.weather[0].main;
    let description = day.weather[0].description;

    let iconID = day.weather[0].icon;
    let icon = API_WEATHER.getHTMLElementFromIcon(iconID);

    let temp;
    if(DOMprefix === 'today') {
        temp = day.main.temp;
    } else {
        temp = day.temp.day;
    }


    // Modifier le DOM
    document.getElementById(DOMprefix + '-forecast-main').innerHTML = main;
    document.getElementById(DOMprefix + '-forecast-more-info').innerHTML = description;
    document.getElementById(DOMprefix + '-icon-weather-container').innerHTML = icon;
    document.getElementById(DOMprefix + '-forecast-temp').innerHTML = `${temp}°C`;
}


window.onload = function () {
   console.log("start function");
   start();
};