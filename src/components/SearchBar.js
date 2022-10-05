import React, { useState } from "react";

const SearchBar = (props) => {
  /* A hook that is used to store the value of the input field. */
  const [query, setQuery] = useState("");

  /**
   * The changeHandler function is an event handler that takes an event as an argument and sets the query
   * state to the value of the event target
   * @param event - The event that triggered the change.
   */
  const changeHandler = (event) => {
    setQuery(event.target.value);
  };

  const fecthWeatherHandler = async () => {
    /* Fetching the data from the API. */
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`
    );

    /* Converting the response into a JSON object. */
    const data = await response.json();
    console.log(data);

    /* Creating a new object with the data that we want to use. */
    const trasnformedWeather = {
      id: data.id,
      city: data.name,
      country: data.sys.country,
      description: data.weather[0].description,
      current_temp: data.main.temp,
      icon: data.weather[0].icon,
      feelsLikeTemp: data.main.feels_like,
      maxTemp: data.main.temp_max,
      minTemp: data.main.temp_min,
      humidity: data.main.humidity,
      pressure: data.main.pressure,
      sunrise: data.sys.sunrise,
      sunset: data.sys.sunset,
      cloudiness: data.clouds.all,
      visibility: data.visibility,
      windSpeed: data.wind.speed,
    };

    console.log(trasnformedWeather);

    props.onSave(trasnformedWeather);
  };

  return (
    <React.Fragment>
      <div className="flex justify-center w-3/4 mx-auto my-8">
        <input
          className="bg-gray-100 border-black border-2 rounded-l-lg 
          outline-0 min-w-full py-2 px-2"
          type="text"
          placeholder="Search..."
          onChange={changeHandler}
        />
        <button
          className="bg-gray-800 text-slate-50 rounded-r-lg px-3"
          onClick={fecthWeatherHandler}
        >
          Search
        </button>
      </div>
    </React.Fragment>
  );
};

export default SearchBar;
