import React from "react";
import ExtendedDetails from "./ExtendedDetails";
import { MdLocationOn } from "react-icons/md";

const CurrentWeather = (props) => {
  return (
    <React.Fragment>
      {/* Container */}
      <div className="flex flex-col bg-slate-900/30 border-1 min-w-[340px] border-slate-50/30 rounded-xl mx-5">
        {/* */}
        <div className="flex flex-row justify-between items-center text-slate-50 bg-cover bg-top bg-[url('https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')] border-b-1 border-slate-50/30 rounded-tl-xl rounded-tr-xl px-6 py-12">
          {/* */}
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
          {/* */}
          <div className="flex flex-col">
            <span className="text-3xl font-extrabold">
              {props.weather.current_temp} °C
            </span>
            {/*  */}
            <div className="flex items-center">
              <span className="text-base font-light">
                {props.weather.description}
              </span>
              <img
                src={`http://openweathermap.org/img/wn/${props.weather.icon}.png`}
                alt="weather_icon"
                className="w-9 h-9"
              />
            </div>
          </div>
        </div>
        {/*  */}
        <div className="grid grid-cols-3 content-center gap-x-2 px-1">
          <ExtendedDetails weather={props.weather} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default CurrentWeather;
