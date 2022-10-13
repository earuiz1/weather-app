import React, { useState } from "react";
import Nav from "./components/Nav/Nav";
import SearchBar from "./components/SearchBar";
import CurrentWeather from "./components/CurrentWeather";
import { WEATHER_API_URL } from "./components/api";

const App = () => {
  /* Creating a state variable called weatherInfo, showWeather, and city. */
  const [weatherInfo, setWeatherInfo] = useState(null);
  const [showWeather, setShowWeather] = useState(false);
  const [city, setCity] = useState(null);

  /**
   * It fetches the data from the API, converts the response into a JSON object, and then creates a new
   * object with the data that we want to use
   */
  const fetchWeatherData = async (query, unit) => {
    /* Fetching the data from the API. */
    const response = await fetch(
      `${WEATHER_API_URL}/weather?q=${query}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=${unit}`
    );

    /* Converting the response into a JSON object. */
    const data = await response.json();
    console.log(data);

    /* Creating a new object with the data that we want to use. */
    const trasnformedWeather = {
      id: data.id,
      city: data.name,
      country: data.sys.country,
      day: new Date(data.dt * 1000).toLocaleString("en-US", {
        weekday: "long",
      }),
      date: new Date(data.dt * 1000).toLocaleString("en-US", {
        month: "long",
        day: "numeric",
      }),
      description: data.weather[0].description,
      current_temp: Math.round(data.main.temp),
      icon: data.weather[0].icon,
      feelsLikeTemp: Math.round(data.main.feels_like),
      maxTemp: Math.round(data.main.temp_max),
      minTemp: Math.round(data.main.temp_min),
      humidity: data.main.humidity,
      pressure: Math.round(0.02953 * data.main.pressure).toFixed(2),
      sunrise: new Date(1000 * data.sys.sunrise).toLocaleTimeString(),
      sunset: new Date(1000 * data.sys.sunset).toLocaleTimeString(),
      cloudiness: data.clouds.all,
      visibility: Math.round(data.visibility / 1609.34),
      windSpeed: Math.round(data.wind.speed * 2.2369),
    };

    // console.log(trasnformedWeather);
    setCity(query);
    setWeatherInfo(trasnformedWeather);
    setShowWeather(true);
  };

  return (
    <React.Fragment>
      <header>
        <Nav
          showWeather={showWeather}
          onFetchWeather={fetchWeatherData}
          city={city}
        />
      </header>
      {!showWeather ? (
        <div className="flex items-center h-screen">
          <SearchBar onFetchWeather={fetchWeatherData} />
        </div>
      ) : (
        <SearchBar onFetchWeather={fetchWeatherData} />
      )}
      <section>
        {showWeather && <CurrentWeather weatherInfo={weatherInfo} />}
      </section>
    </React.Fragment>
  );
};

export default App;
