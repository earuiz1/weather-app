import React, { useState } from "react";
import Nav from "./components/Nav/Nav";
import SearchBar from "./components/SearchBar";
import CurrentWeather from "./components/CurrentWeather";

const App = () => {
  /* Creating a state for the weatherInfo and showWeather. */
  const [weatherInfo, setWeatherInfo] = useState({});
  const [showWeather, setShowWeather] = useState(false);

  const savedInfo = (weather_data) => {
    // console.log(weather_data);
    setWeatherInfo(weather_data);
    setShowWeather(true);
  };

  return (
    <React.Fragment>
      <header>
        <Nav />
      </header>
      <SearchBar onSave={savedInfo} />
      <section>
        {showWeather && <CurrentWeather weatherInfo={weatherInfo} />}
      </section>
    </React.Fragment>
  );
};

export default App;
