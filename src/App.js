import React, { useState } from "react";
import "antd/dist/reset.css";
import "./index.css";
import WeatherCard from "./components/WeatherCard";
import DateRangeFilter from "./components/DateRangeFilter";
import {
    fetchCurrentWeather,
    fetchHistoricalWeather,
} from "./services/weatherService";

function App() {
    const [city, setCity] = useState("");
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleSearch = async () => {
        if (city === "") {
            setError("Please enter a city name");
            return;
        }

        setIsLoading(true);

        try {
            const data = await fetchCurrentWeather(city);
            setWeatherData(data);
            setError("");
        } catch (err) {
            setError(err.message);
            setWeatherData(null);
        } finally {
            setIsLoading(false);
        }
    };

    const handleDateRangeChange = async (startDate, endDate) => {
        if (!weatherData) return;

        setIsLoading(true);

        try {
            const historicalData = await fetchHistoricalWeather(
                weatherData.coord,
                startDate,
                endDate
            );
            setWeatherData(historicalData);
        } catch (error) {
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex flex-col items-center h-screen bg-blue-100">
            <h1 className="text-4xl font-bold mt-10">Weather Application</h1>

            <div className="mt-5 w-80">
                <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Enter city name"
                    className="p-2 border border-gray-300 rounded-md w-full text-center mb-3"
                />
                <button
                    onClick={handleSearch}
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 w-full"
                >
                    Search
                </button>
            </div>

            {error && <p className="text-red-500 mt-5">{error}</p>}

            {weatherData && <WeatherCard weatherData={weatherData} />}

            {weatherData && (
                <DateRangeFilter onChange={handleDateRangeChange} />
            )}

            {isLoading && <p className="mt-5">Loading...</p>}
        </div>
    );
}

export default App;
