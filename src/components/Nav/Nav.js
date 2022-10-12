import React, { useState } from "react";
import { TiWeatherPartlySunny } from "react-icons/ti";

const Nav = (props) => {
  const [isDefaultUnit, setIsDefaultUnit] = useState(true);

  const clickHandler = () => {
    if (isDefaultUnit) {
      props.onFetchWeather(props.city, "imperial");
      setIsDefaultUnit(false);
    } else {
      props.onFetchWeather(props.city, "metric");
      setIsDefaultUnit(true);
    }
  };
  return (
    <React.Fragment>
      <nav className="flex justify-between align-center bg-gray-800 py-5 px-4">
        <div className="flex gap-3">
          <TiWeatherPartlySunny className="text-white" size={28} />
          <h1 className="text-2xl text-slate-50 font-bold">Weather App </h1>
        </div>
        {props.showWeather && (
          <div className="flex gap-3">
            {isDefaultUnit ? (
              <button
                onClick={clickHandler}
                className="bg-slate-300 text-slate-900 font-semibold rounded-xl py-2 px-5"
              >
                °F
              </button>
            ) : (
              <button
                onClick={clickHandler}
                className="bg-slate-300 text-slate-900 font-semibold rounded-xl py-2 px-5"
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
