# 🌍 Global Weather App

A modern and responsive **Global Weather Application** built using **HTML, CSS, Bootstrap, and JavaScript** that displays **real-time weather information** for cities around the world using the **OpenWeatherMap API**.

This project demonstrates practical implementation of:

* API Integration
* Fetch API in JavaScript
* Dynamic UI updates
* Responsive Web Design
* Weather-based animations and backgrounds

---

# 📌 Features

✅ Real-time weather updates
✅ Global city weather search
✅ Temperature, humidity, and wind speed display
✅ Dynamic backgrounds based on weather conditions
✅ Weather icons and animations
✅ Responsive UI using Bootstrap
✅ Error handling for invalid cities/API issues
✅ Clean and beginner-friendly code structure

---

# 🛠 Technologies Used

| Technology         | Purpose                            |
| ------------------ | ---------------------------------- |
| HTML5              | Structure of the application       |
| CSS3               | Styling and animations             |
| Bootstrap 5        | Responsive design                  |
| JavaScript (ES6)   | Application logic and API handling |
| OpenWeatherMap API | Real-time weather data             |
| VS Code            | Development environment            |

---

# 📂 Project Structure

```bash
Global-Weather-App/
│
├── index.html      # Main structure of the application
├── style.css       # Styling and animations
├── script.js       # API integration and application logic
└── README.md       # Project documentation
```

---

# ⚙️ How the Project Works

1. User enters or selects a city name.
2. JavaScript sends a request to the OpenWeatherMap API.
3. API returns weather data in JSON format.
4. Weather details are extracted and displayed dynamically.
5. Background and animations change according to weather conditions.

---

# 🔑 API Integration

This project uses the **OpenWeatherMap Current Weather API**.

## Example API Request

```bash
https://api.openweathermap.org/data/2.5/weather?q=London&appid=YOUR_API_KEY&units=metric
```

## How to Get API Key

1. Create an account on OpenWeatherMap.
2. Generate a free API key.
3. Replace this line in `script.js`:

```javascript
const apiKey = "YOUR_API_KEY";
```

with:

```javascript
const apiKey = "YOUR_ACTUAL_API_KEY";
```

⚠️ Note: New API keys may take 10–15 minutes to activate.

---

# 🚀 Installation & Setup

## Step 1: Clone Repository

```bash
git clone https://github.com/your-username/global-weather-app.git
```

## Step 2: Open Project

Open the project folder in **Visual Studio Code**.

## Step 3: Add API Key

Open `script.js` and add your OpenWeatherMap API key.

## Step 4: Run the Project

Install the **Live Server** extension in VS Code.

Then:

* Right-click `index.html`
* Click **Open with Live Server**

The application will open in your browser.

---

# 🌟 Future Improvements

* 7-day weather forecast
* Hourly weather updates
* Auto-detect user location
* Dark mode
* Additional weather animations
* Deploy on GitHub Pages

---

# 📚 Learning Outcomes

Through this project, the following concepts were learned:

* Working with APIs
* Fetching real-time data
* JSON handling in JavaScript
* DOM manipulation
* Responsive web design
* Error handling and debugging

---

# 👨‍💻 Author

**Muhammad Saif Ur Rehman Feroz**  
[LinkedIn](https://www.linkedin.com/in/saif-ur-rehman-feroz-a79859362/)
