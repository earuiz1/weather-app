import React from "react";

import { WiHumidity, WiBarometer } from "react-icons/wi";
import { FaTemperatureHigh, FaTemperatureLow } from "react-icons/fa";
import {
  BsThermometerSun,
  BsFillSunsetFill,
  BsFillSunriseFill,
  BsFillCloudFill,
  BsWind,
} from "react-icons/bs";

import { MdVisibility } from "react-icons/md";

const CurrentWeatherDetails = (props) => {
  return (
    <React.Fragment>
      {/* Container */}
      <div className="grid grid-cols-5 max-w-5xl mx-auto mt-10 gap-3">
        <div className="flex justify-evenly items-center bg-black py-5 rounded-lg">
          <BsThermometerSun className="text-white" size={22} />
          <span className="text-slate-100 font-medium text-xs">{`Feels Like: ${props.weatherInfo.feelsLikeTemp} °C`}</span>
        </div>
        <div className="flex justify-evenly items-center bg-black py-5 rounded-lg">
          <FaTemperatureHigh className="text-white" size={22} />
          <span className="text-slate-100 font-medium text-xs">{`High: ${props.weatherInfo.maxTemp} °C`}</span>
        </div>
        <div className="flex justify-evenly items-center bg-black py-5 rounded-lg">
          <FaTemperatureLow className="text-white" size={22} />
          <span className="text-slate-100 font-medium text-xs">{`Low: ${props.weatherInfo.minTemp} °C`}</span>
        </div>
        <div className="flex justify-evenly items-center bg-black py-5 rounded-lg">
          <WiHumidity className="text-white" size={28} />
          <span className="text-slate-100 font-medium text-xs">{`Humidity: ${props.weatherInfo.humidity} %`}</span>
        </div>
        <div className="flex justify-evenly items-center bg-black py-5 rounded-lg">
          <BsFillSunriseFill className="text-white" size={28} />
          <span className="text-slate-100 font-medium text-xs">{`Sunrise: ${props.weatherInfo.sunrise}`}</span>
        </div>
        <div className="flex justify-evenly items-center bg-black py-5 rounded-lg">
          <BsFillSunsetFill className="text-white" size={28} />
          <span className="text-slate-100 font-medium text-xs">{`Sunset: ${props.weatherInfo.sunset}`}</span>
        </div>
        <div className="flex justify-evenly items-center bg-black py-5 rounded-lg">
          <WiBarometer className="text-white" size={34} />
          <span className="text-slate-100 font-medium text-xs">{`Pressure: ${props.weatherInfo.pressure} inHg`}</span>
        </div>
        <div className="flex justify-evenly items-center bg-black py-5 rounded-lg">
          <BsFillCloudFill className="text-white" size={24} />
          <span className="text-slate-100 font-medium text-xs">{`Cloudiness: ${props.weatherInfo.cloudiness} %`}</span>
        </div>
        <div className="flex justify-evenly items-center bg-black py-5 rounded-lg">
          <MdVisibility className="text-white" size={28} />
          <span className="text-slate-100 font-medium text-xs">{`Visibility: ${props.weatherInfo.visibility} mi`}</span>
        </div>
        <div className="flex justify-evenly items-center bg-black py-5 rounded-lg">
          <BsWind className="text-white" size={28} />
          <span className="text-slate-100 font-medium text-xs">{`Wind: ${props.weatherInfo.windSpeed} mph`}</span>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CurrentWeatherDetails;
