import React from "react";
import ExtendedDetails from "./ExtendedDetails";
import { MdLocationOn } from "react-icons/md";

const CurrentWeather = (props) => {
  return (
    <React.Fragment>
      {/* Container */}
      <div className="flex flex-row justify-between bg-slate-900 max-w-3xl border-2 border-slate-200 rounded-xl mx-auto shadow-2xl">
        {/* Inner Container Left */}
        <div className="flex flex-col text-slate-50 items-start pl-5 pr-12 py-5 bg-cover bg-[url('https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')] rounded-xl">
          {/* Top Left Inner Container*/}
          <div className="flex flex-col">
            <span className="text-2xl font-bold">{props.weather.day}</span>
            <span className="text-base font-extralight">
              {props.weather.date}
            </span>
            {/* Date/Icon Container */}
            <div className="flex items-center gap-1">
              <MdLocationOn size={15} />
              <span className="text-sm">{props.weather.city}</span>
            </div>
          </div>
          {/* Bottom Left Inner Container*/}
          <div className="flex flex-col pt-12">
            <span className="text-2xl font-extrabold">
              {props.weather.current_temp} °C
            </span>
            {/* Description/Icon Container */}
            <div className="flex items-center">
              <span className="text-base font-light">
                {props.weather.description}
              </span>
              <img
                src={`http://openweathermap.org/img/wn/${props.weather.icon}.png`}
                alt="weather_icon"
                width="30"
                height="30"
              />
            </div>
          </div>
        </div>
        {/* Inner Right Container */}
        <div className="grid grid-cols-3 content-center grow gap-x-2 pr-5">
          <ExtendedDetails weather={props.weather} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default CurrentWeather;
