import React, { useState } from "react";
import Nav from "./components/Nav/Nav";
import SearchBar from "./components/SearchBar";
import CurrentWeather from "./components/CurrentWeather";
import ForecastDetails from "./components/ForecastDetails";
import { WEATHER_API_URL } from "./components/api";
import axios from "axios";

const App = () => {
  /* Creating a state variable called weatherInfo, forecast, showWeather, and city. */
  const [weatherInfo, setWeatherInfo] = useState(null);
  const [forecast, setForcast] = useState(null);
  const [showWeather, setShowWeather] = useState(false);
  const [city, setCity] = useState(null);

  const fetchWeatherData = (query, unit) => {
    //API calls
    const currentWeatherAPICall = `${WEATHER_API_URL}/weather?q=${query}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=${unit}`;
    const forecastAPICall = `${WEATHER_API_URL}/forecast?q=${query}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=${unit}`;

    const getCurrentWeather = axios.get(currentWeatherAPICall);
    const getForecast = axios.get(forecastAPICall);

    axios.all([getCurrentWeather, getForecast]).then(
      axios.spread((...allData) => {
        const allCurrentWeatherData = allData[0];
        const allForecastData = allData[1];

        console.log("Current Weather Data: ", allCurrentWeatherData);
        console.log("Forecast Data: ", allForecastData);

        const transformedWeatherData = {
          id: allCurrentWeatherData.data.id,
          city: allCurrentWeatherData.data.name,
          country: allCurrentWeatherData.data.sys.country,
          day: new Date(allCurrentWeatherData.data.dt * 1000).toLocaleString(
            "en-US",
            {
              weekday: "long",
            }
          ),
          date: new Date(allCurrentWeatherData.data.dt * 1000).toLocaleString(
            "en-US",
            {
              month: "long",
              day: "numeric",
            }
          ),
          description: allCurrentWeatherData.data.weather[0].description,
          current_temp: Math.round(allCurrentWeatherData.data.main.temp),
          icon: allCurrentWeatherData.data.weather[0].icon,
          feelsLikeTemp: Math.round(allCurrentWeatherData.data.main.feels_like),
          maxTemp: Math.round(allCurrentWeatherData.data.main.temp_max),
          minTemp: Math.round(allCurrentWeatherData.data.main.temp_min),
          humidity: allCurrentWeatherData.data.main.humidity,
          pressure: Math.round(
            0.02953 * allCurrentWeatherData.data.main.pressure
          ).toFixed(2),
          sunrise: new Date(
            1000 * allCurrentWeatherData.data.sys.sunrise
          ).toLocaleTimeString(),
          sunset: new Date(
            1000 * allCurrentWeatherData.data.sys.sunset
          ).toLocaleTimeString(),
          cloudiness: allCurrentWeatherData.data.clouds.all,
          visibility: Math.round(
            allCurrentWeatherData.data.visibility / 1609.34
          ),
          windSpeed: Math.round(allCurrentWeatherData.data.wind.speed * 2.2369),
        };

        /* This is filtering the forecast data to only show the forecast for 12:00:00. */
        const filteredItems = allForecastData.data.list.filter((forecastItem) =>
          forecastItem.dt_txt.match("12:00:00")
        );

        console.log("Filtered Items: ", filteredItems);

        const trasnformedForecastData = [
          {
            id: "f1",
            maxTemp: Math.round(filteredItems[0].main.temp_max),
            minTemp: Math.round(filteredItems[0].main.temp_min),
            icon: filteredItems[0].weather[0].icon,
          },
          {
            id: "f2",
            maxTemp: Math.round(filteredItems[1].main.temp_max),
            minTemp: Math.round(filteredItems[1].main.temp_min),
            icon: filteredItems[1].weather[0].icon,
          },
          {
            id: "f3",
            maxTemp: Math.round(filteredItems[2].main.temp_max),
            minTemp: Math.round(filteredItems[2].main.temp_min),
            icon: filteredItems[2].weather[0].icon,
          },
          {
            id: "f4",
            maxTemp: Math.round(filteredItems[3].main.temp_max),
            minTemp: Math.round(filteredItems[3].main.temp_min),
            icon: filteredItems[3].weather[0].icon,
          },
          {
            id: "f5",
            maxTemp: Math.round(filteredItems[4].main.temp_max),
            minTemp: Math.round(filteredItems[4].main.temp_min),
            icon: filteredItems[4].weather[0].icon,
          },
        ];

        console.log(trasnformedForecastData);
        console.log(transformedWeatherData);

        setCity(query);
        setWeatherInfo(transformedWeatherData);
        setForcast(trasnformedForecastData);
        setShowWeather(true);
      })
    );
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
      <section>{showWeather && <ForecastDetails />}</section>
    </React.Fragment>
  );
};

export default App;
