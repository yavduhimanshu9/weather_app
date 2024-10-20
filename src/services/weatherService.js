const apiKey = process.env.REACT_APP_OPENWEATHER_API_KEY;

// Fetch current weather data
export async function fetchCurrentWeather(city) {
    try {
        console.log(apiKey);
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );
        if (!response.ok) {
            throw new Error("City not found");
        }
        return await response.json();
    } catch (error) {
        throw error;
    }
}

// Fetch historical weather data (for a given date range)
export async function fetchHistoricalWeather(city, startDate, endDate) {
    try {
        console.log(apiKey);
        const response = await fetch(
            `https://history.openweathermap.org/data/2.5/history/city?lat=${city.lat}&lon=${city.lon}&type=hour&start=${startDate}&end=${endDate}&appid=${apiKey}`
        );
        if (!response.ok) {
            throw new Error("Historical data not available");
        }
        return await response.json();
    } catch (error) {
        throw error;
    }
}
