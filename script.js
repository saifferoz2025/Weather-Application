const apiKey = "c0505f2e451d5ccdc4a2ff1099809b79"; // Working key

document.getElementById("getWeatherBtn").addEventListener("click", () => {
    const city = document.getElementById("cityInput").value;
    if(!city){
        alert("Please select a city");
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`;

    fetch(url)
    .then(res => {
        if(!res.ok) throw new Error("City not found");
        return res.json();
    })
    .then(data => {
        const { name, sys, main, weather, wind } = data;

        // Clear previous result
        const resultDiv = document.getElementById("weatherResult");
        resultDiv.innerHTML = "";

        // Calculate sunrise & sunset in local time
        const sunrise = new Date(sys.sunrise * 1000).toLocaleTimeString();
        const sunset = new Date(sys.sunset * 1000).toLocaleTimeString();

        // Background based on weather
        const weatherMain = weather[0].main.toLowerCase();
        let bg = '';
        if(weatherMain.includes("cloud")) bg = "linear-gradient(to right, #bdc3c7, #2c3e50)";
        else if(weatherMain.includes("rain")) bg = "linear-gradient(to right, #373B44, #4286f4)";
        else if(weatherMain.includes("sun") || weatherMain.includes("clear")) bg = "linear-gradient(to right, #f7971e, #ffd200)";
        else if(weatherMain.includes("snow")) bg = "linear-gradient(to right, #e6e9f0, #eef1f5)";
        else bg = "linear-gradient(to right, #74ebd5, #ACB6E5)";

        document.body.style.background = bg;
        document.getElementById("weatherCard").style.background = "rgba(255,255,255,0.8)";

        // Display data including feels like, sunrise, sunset, flag
        const html = `
            <h3>${name}, ${sys.country} <img class="flag" src="https://flagcdn.com/48x36/${sys.country.toLowerCase()}.png" alt="flag"></h3>
            <h4>${weather[0].main} <img src="https://openweathermap.org/img/wn/${weather[0].icon}@2x.png" alt="icon"></h4>
            <p>🌡 Temperature: ${main.temp}°C | Feels like: ${main.feels_like}°C</p>
            <p>💧 Humidity: ${main.humidity}%</p>
            <p>🌬 Wind Speed: ${wind.speed} m/s</p>
            <p>🌅 Sunrise: ${sunrise} | 🌇 Sunset: ${sunset}</p>
        `;
        resultDiv.innerHTML = html;

        // Clouds animation
        if(weatherMain.includes("cloud")){
            for(let i=0;i<3;i++){
                let cloud = document.createElement("img");
                cloud.src = "https://cdn-icons-png.flaticon.com/512/414/414825.png";
                cloud.className = "cloud";
                cloud.style.top = `${20 + i*30}px`;
                cloud.style.width = `${80 + i*30}px`;
                resultDiv.appendChild(cloud);
            }
        }

        // Rain animation
        if(weatherMain.includes("rain")){
            for(let i=0;i<50;i++){
                let drop = document.createElement("div");
                drop.className = "rain";
                drop.style.left = `${Math.random()*200}px`;
                drop.style.animationDuration = `${0.5 + Math.random()}s`;
                resultDiv.appendChild(drop);
            }
        }
    })
    .catch(err => {
        document.getElementById("weatherResult").innerHTML = `<p class="text-danger">${err.message}</p>`;
    });
});
