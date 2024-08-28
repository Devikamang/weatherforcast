
const apiKey = '3234c2793c819faf6ed4b9248671a534'; // Replace with your OpenWeatherMap API key

function getWeather() {
    const city = document.getElementById('city').value;
    if (city) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
            .then(response => response.json())
            .then(data => {
                if (data.cod === 200) {
                    const weather = `
                        <h2>${data.name}, ${data.sys.country}</h2>
                        <p>Temperature: ${data.main.temp}°C</p>
                        <p>Weather: ${data.weather[0].description}</p>
                        <p>Humidity: ${data.main.humidity}%</p>
                        <p>Wind Speed: ${data.wind.speed} m/s</p>
                        <img src="${getWeatherImage(data.weather[0].main)}" alt="${data.weather[0].main}">
                    `;
                    document.getElementById('weather').innerHTML = weather;
                } else {
                    document.getElementById('weather').innerHTML = `<p>${data.message}</p>`;
                }
            })
            .catch(error => {
                document.getElementById('weather').innerHTML = `<p>Could not fetch weather data. Please try again later.</p>`;
            });
    } else {
        document.getElementById('weather').innerHTML = `<p>Please enter a city name.</p>`;
    }
}

function getWeatherImage(weather) {
    switch (weather.toLowerCase()) {
        case 'rain':'rainy.jpg';
        case 'thunderstorm':
            return 'thunderstorm.jpg'; // Path to your rainy image
        case 'clear':
            return 'clody.jpg'; // Path to your sunny image
        case 'clouds':
            return 'cloudy.jpg'; // Path to your cloudy image
        case 'haze':
            return 'haze.jpg';
        case 'mist':
            return 'haze.jpg';
        case 'fog':
            return 'haze.jpg'; // Path to your haze image
        case 'windy':
            return 'wind.jpg'; // Path to your windy image
        default:
            return 'clody.jpg'; // Path to a default image
    }
}
