import React from "react";

const ForecastDetails = ({ forecast, isDefaultUnit }) => {
  return (
    <React.Fragment>
      {/* Main Container */}
      <div className="flex flex-col justify-around bg-slate-900/30 border-1 border-slate-50/30 min-w-[250px] min-h-[364px] rounded-xl mx-5">
        {/* Main Container Title */}
        <div className="flex justify-center border-b-1 border-slate-50/30 py-2 px-2">
          <span className="text-slate-50 font-bold text-2xl">
            5-Day Forecast
          </span>
        </div>
        {/* Forecast Item Container */}
        <div className="flex flex-col">
          {forecast.map((item) => {
            return (
              <div
                key={item.id}
                className="flex flex-row justify-around items-center text-slate-50 py-2"
              >
                <span className="text-md font-semibold">{item.day}</span>
                <img
                  src={`http://openweathermap.org/img/wn/${item.icon}.png`}
                  alt="weather_icon"
                  className="h-10 w-10"
                />
                <span className="text-md font-bold">
                  {item.temperature} {isDefaultUnit ? " °C" : " °F"}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
};

export default ForecastDetails;
