function success(pos) {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}&appid=9e8fa3f11a4043c4550607b48c2bd8c3&units=imperial`;

    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            document.querySelector('#city').textContent = data.name;
            document.querySelector('#temp').textContent = data.main.temp + '°C';
            document.querySelector('#main').textContent = data.weather[0].main;
            document.querySelector('#desc').textContent =
                data.weather[0].description;
            console.log('data :', data);
        });
}

function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
}

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, error);
}
console.log('here');
