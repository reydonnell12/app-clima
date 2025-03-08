let urlBase = 'https://api.openweathermap.org/data/2.5/weather';
let api_key = '10d11033cdac4862551a8ae1cf884357';
let difkelvin = 273.15; 
let weatherData = document.getElementById('weatherData');
let boton = document.getElementById('boton');
let input = document.getElementById('input');
let map; // global variable for the map

boton.addEventListener('click', searchWeather);
input.addEventListener('keypress', (event)=>{
    if(event.key === 'Enter'){ 
        searchWeather();
    }
});

function searchWeather(){
    const city = input.value;
    if(city){
        fetchDataWeather(city);
        input.value = '';
    }
}
function fetchDataWeather(city){
    fetch(`${urlBase}?q=${city}&appid=${api_key}&lang=es`)
    .then((response) => {
        if(!response.ok){
            throw new Error('Ciudad no encontrada');
        }
        return response.json();
    })
    .then((json)=> showDataWheater(json))
    .catch(error =>{
        weatherData.innerHTML =`<p style="color:red;">❌${error.message}</p>`
    });
}

function showDataWheater(data){
    console.log(data);
    const weatherData = document.getElementById('weatherData');
    weatherData.innerHTML = '';

    const Nombre = data.name;
    const Humedad = data.main.humidity;
    const Presion = data.main.pressure;
    const Temperatura = Math.round(data.main.temp - difkelvin);
    const Temperatura_Minima = Math.round(data.main.temp_min - difkelvin);
    const Temperatura_Maxima = Math.round(data.main.temp_max - difkelvin);
    const Descripcion_Clima = data.weather[0].description;
    const Viento = data.wind.speed;
    const Icono = data.weather[0].icon; 
    const { lat, lon } = data.coord;
    const iconUrl = `https://openweathermap.org/img/wn/${Icono}.png`;
// Ahora es animado 🎬🔥


    const contenido = `
    <h2>${Nombre}</h2>
    <img src="${iconUrl}" alt="${Descripcion_Clima}">
    <p>🌡️ Temperatura: ${Temperatura}°C</p>
    <p>🔻 Mínima: ${Temperatura_Minima}°C | 🔺 Máxima: ${Temperatura_Maxima}°C</p>
    <p>💧 Humedad: ${Humedad}%</p>
    <p>🎈 Presión: ${Presion} hPa</p>
    <p>💨 Viento: ${Viento} m/s</p>
    <p>🌤️ Clima: ${Descripcion_Clima.charAt(0).toUpperCase() + Descripcion_Clima.slice(1)}</p>
`;

weatherData.innerHTML = contenido;
   // Crear mapa con Leaflet
   if (map) {
    map.remove(); // Si el mapa ya existe, eliminarlo antes de crear uno nuevo
}
map = L.map('map').setView([lat, lon], 10);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

L.marker([lat, lon]).addTo(map)
    .bindPopup(`<b>${Nombre}</b><br>${Descripcion_Clima}`)
    .openPopup();
}



    //Create estructure HTML

    // const cityTitle = document.createElement('h2');
    // cityTitle.textContent = Nombre;

    // const weatherIcon = document.createElement('img');
    // weatherIcon.src = iconUrl;
    // weatherIcon.alt = Descripcion_Clima;

    // const humedity = document.createElement('p');
    // humedity.textContent =`La humedad actual es: ${Humedad}`;

    // const pressure = document.createElement('p');
    // pressure.textContent = `La presion atmosferica actual es: ${Pression}`;

    // const temp = document.createElement('p');
    // temp.textContent = `La Temperatura es: ${Math.floor(Temperatura-difkelvin)} °C`;

    // const tempMin = document.createElement('p');
    // tempMin.textContent = `La temperatura minima es: ${Math.floor(Tempratura_Minima - difkelvin)} °C`;

    // const tempMax = document.createElement('p');
    // tempMax.textContent = `La tempratura maxima es: ${Math.floor(Temperatura_Maxima - difkelvin)} °C`;

    // const weather = document.createElement('p');
    // weather.textContent = `La descripcion meteorológica es ${Descripcion_Clima}`;

    // const wind = document.createElement('p');
    // wind.textContent = `El viento es: ${Viento}`;

    //put into the father
    // weatherData.appendChild(cityTitle);
    // weatherData.appendChild(weatherIcon); // Agrega el icono
    // weatherData.appendChild(humedity)
    // weatherData.appendChild(pressure);
    // weatherData.appendChild(temp);
    // weatherData.appendChild(tempMin);
    // weatherData.appendChild(tempMax);
    // weatherData.appendChild(weather);
    // weatherData.appendChild(wind);


// fetch(`https://api.openweathermap.org/data/2.5/weather?q=bogota&appid=${api_key}`)
// .then((response) => response.json())
// .then((json)=> weatherData.textContent = JSON.stringify(json));


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