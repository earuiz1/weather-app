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
      <nav className="flex justify-center align-center bg-transparent pt-4 pb-2 px-4 ">
        <div className="flex items-center gap-2">
          <TiWeatherPartlySunny className="text-white" size={60} />
          <h1 className="lg:text-6xl md:text-6xl text-4xl text-slate-50 font-extrabold">
            Weather App
          </h1>
        </div>
        {props.showWeather && (
          <div className="flex flex-col">
            {isDefaultUnit ? (
              <button
                onClick={clickHandler}
                className="bg-slate-300 text-slate-900 font-semibold rounded-xl px-3 py-2"
              >
                °F
              </button>
            ) : (
              <button
                onClick={clickHandler}
                className="bg-slate-300 text-slate-900 font-semibold rounded-xl px-3 py-2"
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
