const API_KEY = "415e2caaef12d7704d5edff8dfce2e7c";

function ongeoOk(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}`;
    fetch(url).then(Response => Response.json()).then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
       city.innerText = data.name;
      weather.innerText = data.weather[0].main;
    });
}
function ongeoError(){
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(ongeoOk, ongeoError);


