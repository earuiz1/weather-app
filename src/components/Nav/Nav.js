import React from "react";
import { TiWeatherPartlySunny } from "react-icons/ti";

const Nav = ({ isDefaultUnit, onFetchWeather, city, showWeather }) => {
  const clickHandler = () => {
    if (isDefaultUnit) {
      onFetchWeather(city, "imperial", false);
    } else {
      onFetchWeather(city, "metric", true);
    }
  };
  return (
    <React.Fragment>
      <nav className="flex justify-center align-center bg-transparent pt-4 pb-2 px-4 gap-20">
        <div className="flex items-center gap-2">
          <TiWeatherPartlySunny className="text-white" size={60} />
          <h1 className="lg:text-6xl md:text-6xl text-4xl text-slate-50 font-extrabold">
            Weather App
          </h1>
        </div>
        {showWeather && (
          <div className="flex flex-col justify-center align-center">
            {isDefaultUnit ? (
              <button
                onClick={clickHandler}
                className="bg-slate-900 hover:bg-slate-700 border-slate-50/30 border-1 text-slate-50 rounded-lg px-6 py-2"
              >
                °F
              </button>
            ) : (
              <button
                onClick={clickHandler}
                className="bg-slate-900 hover:bg-slate-700 border-slate-50/30 border-1 text-slate-50 rounded-lg px-6 py-2 "
              >
                °C
              </button>
            )}
          </div>
        )}
      </nav>
    </React.Fragment>
  );
};

export default Nav;
