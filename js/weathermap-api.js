
$('document').ready(function () {
    'use strict';

    var cityTitle = $("#city-name");
    var weatherArea = $("#weather-area");
    var weatherInfoTemplate = "";
    var daysCounter = 0;
    var saCoords = [-98.491142, 29.424349];

    getForecast({lat: saCoords[1], lng: saCoords[0]});

    // Map
    mapboxgl.accessToken = mapboxToken;
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v9',
        zoom: 10,
        center: saCoords
    });

    function onDragEnd() {
        var coordinates = marker.getLngLat();
        getForecast(coordinates);
    }

    var marker = new mapboxgl.Marker({
        draggable: true
    }).setLngLat(saCoords).addTo(map);

    marker.on('dragend', onDragEnd);

    function getForecast(coordinates){
        $.get("http://api.openweathermap.org/data/2.5/forecast", {
            APPID: OPEN_WEATHER_APPID,
            lat:     coordinates.lat,
            lon: coordinates.lng,
            units: "imperial"
        }).done(function(data) {
            console.log('5 day forecast', data);
            cityTitle.text('Current city: ' + data.city.name);
            marker.setLngLat([coordinates.lng, coordinates.lat]);
            weatherArea.empty();
            weatherArea.fadeOut();
            map.flyTo({center: [coordinates.lng, coordinates.lat], zoom: 19});
            data.list.forEach(function(el, index){
                // console.log(el);
                if(daysCounter === 0){
                    weatherInfoTemplate = "<div class=\"card\">\n" +
                        "<div class=\"card-header text-center\">"+ el.dt_txt.slice(0, 10) +"</div>\n" +
                        "<div class=\"card-body\">\n" +
                        "<h6 class=\"card-text text-center\">"+ el.main.temp + "°F / " + el.main.temp_max+"°F</h6>\n" +
                        "<img class='icon' src=\"http://openweathermap.org/img/w/"+ el.weather[0].icon + ".png\">" +
                        "<ul class=\"list-group list-group-flush\">"+
                        "<li class=\"list-group-item\">Description: <strong>"+ el.weather[0].description +"</strong></li>\n" +
                        "<li class=\"list-group-item\">Humidity: <strong>"+ el.main.humidity +"</strong></li>\n" +
                        "<li class=\"list-group-item\">Wind: <strong>"+ el.wind.speed +"</strong></li>\n" +
                        "<li class=\"list-group-item\">Pressure: <strong>"+ el.main.pressure +"</strong></li>\n" +
                        "</ul>"+
                        "</div>\n" +
                        "</div>";
                    weatherArea.append(weatherInfoTemplate);
                }

                if(daysCounter < 8){
                    daysCounter++;
                }else{
                    daysCounter = 0;
                }
            });
            weatherArea.fadeIn();
        });
    }

    function buildCoordsObj(latitude, longitude){
        getForecast({lat: latitude, lng: longitude});
    }

    $("#get-place-btn").click(function(e){
        e.preventDefault();
        geocode($("#place-text").val());
    });

    function geocode(search) {
        var baseUrl = 'https://api.mapbox.com';
        var endPoint = '/geocoding/v5/mapbox.places/';
        return fetch(baseUrl + endPoint + encodeURIComponent(search) + '.json' + "?" + 'access_token=' + mapboxgl.accessToken)
            .then(function(res) {
                return res.json();
            }).then(function(data) {
                console.log(data);
                buildCoordsObj(data.features[0].center[1], data.features[0].center[0]);
            });
    }

});