import React from 'react';

const WeatherCard = ({ weatherData }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mt-5 text-center">
      <h2 className="text-2xl font-bold">{weatherData.name}, {weatherData.sys.country}</h2>
      <p className="text-xl">{weatherData.weather[0].description}</p>
      <p className="text-3xl font-semibold mt-2">{weatherData.main.temp}°C</p>
      <div className="flex justify-center space-x-5 mt-4">
        <div>
          <p>Humidity</p>
          <p>{weatherData.main.humidity}%</p>
        </div>
        <div>
          <p>Wind Speed</p>
          <p>{weatherData.wind.speed} m/s</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
