import React, { useState } from "react";
import Nav from "./components/Nav/Nav";
import SearchBar from "./components/SearchBar";
import CurrentWeather from "./components/CurrentWeather";
import ForecastDetails from "./components/ForecastDetails";
import { WEATHER_API_URL } from "./components/api";
import axios from "axios";

const App = () => {
  /* Creating a state variable called weatherInfo, forecast, showWeather, and city. */
  const [weather, setWeather] = useState(null);
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

        const transformedWeatherData = {
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

        const trasnformedForecastData = filteredItems.map((item) => {
          return {
            id: Math.random().toString(),
            temperature: Math.round(item.main.temp),
            day: new Date(item.dt * 1000).toLocaleString("en-US", {
              weekday: "long",
            }),
            icon: item.weather[0].icon,
          };
        });

        setCity(query);
        setWeather(transformedWeatherData);
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
      {!showWeather && (
        <div className="flex justify-center items-center h-screen">
          <SearchBar onFetchWeather={fetchWeatherData} />
        </div>
      )}
      {/* {!showWeather ? (
        <div className="flex items-center h-screen">
          <SearchBar onFetchWeather={fetchWeatherData} />
        </div>
      ) : (
        <SearchBar onFetchWeather={fetchWeatherData} />
      )} */}
      {/* <section>{showWeather && <CurrentWeather weather={weather} />}</section>
      <section>
        {showWeather && <ForecastDetails forecast={forecast} />}
      </section> */}

      {showWeather && (
        <div className="flex items-center justify-center min-w-full min-h-screen">
          <div className="flex flex-col items-center w-96 gap-6 py-6">
            <div className="w-full">
              <SearchBar onFetchWeather={fetchWeatherData} />
            </div>
            <section className="w-full">
              <CurrentWeather weather={weather} />
            </section>
            <section className="w-full">
              <ForecastDetails forecast={forecast} />
            </section>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default App;
