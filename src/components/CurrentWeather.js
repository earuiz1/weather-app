import React from "react";

const CurrentWeather = (props) => {
  const updatedTCurrentTemp = Math.round(props.weatherInfo.current_temp);

  return (
    <React.Fragment>
      <div className="flex flex-col align-center bg-black opacity-90 rounded-lg max-w-3xl mx-auto py-3 px-3 gap-4 ">
        <div className="flex justify-center">
          <h3 className="text-slate-50 text-4xl font-bold">{`${props.weatherInfo.city} , ${props.weatherInfo.country}`}</h3>
          <img
            src={`http://openweathermap.org/img/wn/${props.weatherInfo.icon}.png`}
            alt="weather_icon"
          />
        </div>
        <div className="flex justify-center">
          <span className="text-slate-50 font-semibold text-base">
            {props.weatherInfo.description}
          </span>
        </div>
        <div className="flex justify-center">
          <span className="text-slate-50 font-semibold text-5xl">
            {`${updatedTCurrentTemp} °C`}
          </span>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CurrentWeather;
