
//TO DO: CALL WEATHER APP
// var weather = currentWeather
$.get("http://api.openweathermap.org/data/2.5/forecast", {
    APPID: OPEN_WEATHER_APPID,
    lat:    29.423017,
    lon:   -98.48527,
    units: "imperial"
}).done(function(data) {
    console.log('current weather', data);
});

//TO DO: ADD A MAPBOX


mapboxgl.accessToken = 'pk.eyJ1IjoibmljaG9sYXN3aWxzb240NyIsImEiOiJja2lqMHlvbjkwNGZ3MnVsbWJtZzd3a3NwIn0.-P0nWnMqCD6l4Rn53yfhjQ';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
    center: [ -98.4853, 29.423], // starting position [lng, lat]
    zoom: 9 // starting zoom
});

