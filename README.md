# Weather App 🌦

This is a React application that allows users to search for a city's current weather and view its historical weather data using the [OpenWeatherMap API](https://openweathermap.org/).

## Features

- Search for current weather data by city.
- Display temperature, humidity, wind speed, and other weather details.
- View historical weather data for the searched city.
- User-friendly interface with responsive design.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en/) (v14+ recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository

2. Install dependencies:

    bash
    npm install
    

3. Create an .env file in the root directory of the project and add your OpenWeatherMap API key:

    bash
    REACT_APP_WEATHER_API_KEY=your_openweathermap_api_key
    

4. Start the application:

    bash
    npm start
    

    The app will run at http://localhost:3000.

### Usage

1. Enter the name of a city in the search box.
2. Press "Search" to get the current weather and historical data.
3. The weather information will be displayed including temperature, humidity, and other details.

### API Integration

This project integrates with the [OpenWeatherMap API](https://openweathermap.org/api):

- *Current Weather Data API*: Used to fetch the current weather of a searched city.
- *Historical Weather Data API*: Used to display past weather information based on location and date.



### Technologies Used

- *React*: Frontend framework.
- *Tailwind CSS*: For styling.
- *Axios*: For making API requests.
- *OpenWeatherMap API*: For fetching weather data.

### Available Scripts

- npm start: Start the development server.
- npm build: Build the app for production.

### Future Enhancements

- Add more weather details like air quality and UV index.
- Support for different units (Celsius/Fahrenheit).
- Show a forecast for the next few days.
- Add a map view to show the city's weather on a geographical map.
