const weather = document.querySelector(".js-weather");

const API_KEY = "d43b97a224c7acc5bb89e1955b32c817";
const COORDS = 'coords';

function getWeather(lat, lng) {
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
        ).then(function(response) {
            return response.json();
        }).then(function(json) {
           // console.log(json); //json이 ready되면 콘솔에 오브젝트 출력해
           const temperature = json.main.temp;
           const place = json.name;
           weather.innerText=`${temperature}℃ @ ${place}`
        });
}

function saveCoords(coordsObj) {
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,   // latitude:latitude 랑 같은 말
        longitude   // longitude:longitude 랑 같은 말
    };
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}

function handleGeoError() {
    console.log("위치정보 가져오는데 실패했슴당.ㅠ")
}

function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}


function loadCoords() {
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null) {
        askForCoords();
    } else {
        const parseCoords = JSON.parse(loadedCoords);
        getWeather(parseCoords.latitude, parseCoords.longitude);
    }
    
}

function init() {
    loadCoords();
}

init();