let searchBtn = document.getElementById('searchBtn').addEventListener('click', function () {
    let cityName = document.getElementById('cityName').value;
    showTemp(cityName);
})

function showTemp(cityName) {
    const apiId = '90af12a66b8c0d8664922d454d83d7d3';
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiId}`;
    fetch(url, {
        method: "GET"
    })
        .then(response => response.json())
        .then(data => {
            let temp = data.main.temp - 273.06;
            let environment = data.weather[0].main;
            let icon = data.weather[0].icon;
            let iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;
            document.getElementById('showCityName').innerText = cityName;
            document.getElementById('temperature').innerText = temp.toFixed(2);
            document.getElementById('environment').innerText = environment;
            document.getElementById('icon').setAttribute('src', iconUrl);
            document.getElementById('weatherDetails').style.display = 'block';
        })
}
