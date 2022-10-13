import React from "react";
import ExtendedDetails from "./ExtendedDetails";
import { MdLocationOn } from "react-icons/md";

const CurrentWeather = (props) => {
  return (
    <React.Fragment>
      {/* Container */}
      <div className="flex flex-row justify-between bg-black max-w-2xl rounded-xl mx-auto">
        {/* Inner Container Left */}
        <div className="flex flex-col text-slate-50 items-start pl-5 pr-12 py-5 border-r-2 border-slate-500">
          {/* Top Left Inner Container*/}
          <div className="flex flex-col">
            <span className="text-2xl font-bold">{props.weatherInfo.day}</span>
            <span className="text-base font-extralight">
              {props.weatherInfo.date}
            </span>
            {/* Date/Icon Container */}
            <div className="flex items-center gap-1">
              <MdLocationOn size={15} />
              <span className="text-sm">{props.weatherInfo.city}</span>
            </div>
          </div>
          {/* Bottom Left Inner Container*/}
          <div className="flex flex-col pt-12">
            <span className="text-2xl font-extrabold">
              {props.weatherInfo.current_temp} °C
            </span>
            {/* Description/Icon Container */}
            <div className="flex items-center">
              <span className="text-base font-light">
                {props.weatherInfo.description}
              </span>
              <img
                src={`http://openweathermap.org/img/wn/${props.weatherInfo.icon}.png`}
                alt="weather_icon"
                width="30"
                height="30"
              />
            </div>
          </div>
        </div>
        {/* Inner Right Container */}
        <div className="grid grid-cols-3 content-center gap-x-2 pr-5">
          <ExtendedDetails weatherInfo={props.weatherInfo} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default CurrentWeather;
