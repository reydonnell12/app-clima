let api_key = '10d11033cdac4862551a8ae1cf884357';
let difkelvin = 273.15;
let weatherData = document.getElementById('weatherData');

// fetch(`https://api.openweathermap.org/data/2.5/weather?q=bogota&appid=${api_key}`)
// .then((response) => response.json())
// .then((json)=> weatherData.textContent = JSON.stringify(json));


fetch(`https://api.openweathermap.org/data/2.5/weather?q=bogota&appid=${api_key}`)
.then()
.then()






// fetch(`https://api.openweathermap.org/data/2.5/weather?q=bogota&appid=${api_key}`)
//     .then((response) => response.json())
//     .then((json) => {
//         // Extraer datos relevantes
//         let city = json.name;
//         let country = json.sys.country;
//         let temperature = (json.main.temp - difkelvin).toFixed(2);
//         let description = json.weather[0].description;
//         let humidity = json.main.humidity;
//         let windSpeed = json.wind.speed;
//         let icon = json.weather[0].icon;

//         // Crear HTML estructurado
//         weatherData.innerHTML = `
//             <h2>${city}, ${country}</h2>
//             <img src="https://openweathermap.org/img/wn/${icon}.png" alt="Weather icon">
//             <p><strong>Temperatura:</strong> ${temperature}°C</p>
//             <p><strong>Condición:</strong> ${description}</p>
//             <p><strong>Humedad:</strong> ${humidity}%</p>
//             <p><strong>Viento:</strong> ${windSpeed} m/s</p>
//         `;
//     })
//     .catch((error) => {
//         weatherData.innerHTML = `<p style="color: red;">Error al obtener los datos del clima.</p>`;
//     });