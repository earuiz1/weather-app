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
  const transformedSunset = new Date(
    1000 * props.weatherInfo.sunset
  ).toLocaleTimeString();

  const transformedSunrise = new Date(
    1000 * props.weatherInfo.sunrise
  ).toLocaleTimeString();

  const transformedPressure = Math.round(
    0.02953 * props.weatherInfo.pressure
  ).toFixed(2);

  const transformedVisibility = Math.round(
    props.weatherInfo.visibility / 1609.34
  );

  const transformedWindSpeed = Math.round(props.weatherInfo.windSpeed * 2.2369);

  return (
    <React.Fragment>
      {/* Container */}
      <div className="grid grid-cols-4 max-w-4xl mx-auto mt-10 gap-2">
        <div className="flex justify-evenly items-center bg-black py-5 rounded-lg">
          <BsThermometerSun className="text-white" size={22} />
          <span className="text-slate-100 font-medium text-sm">{`Feels Like: ${props.weatherInfo.feelsLikeTemp} °C`}</span>
        </div>
        <div className="flex justify-evenly items-center bg-black py-5 rounded-lg">
          <FaTemperatureHigh className="text-white" size={22} />
          <span className="text-slate-100 font-medium text-sm">{`High: ${props.weatherInfo.maxTemp} °C`}</span>
        </div>
        <div className="flex justify-evenly items-center bg-black py-5 rounded-lg">
          <FaTemperatureLow className="text-white" size={22} />
          <span className="text-slate-100 font-medium text-sm">{`Low: ${props.weatherInfo.minTemp} °C`}</span>
        </div>
        <div className="flex justify-evenly items-center bg-black py-5 rounded-lg">
          <WiHumidity className="text-white" size={28} />
          <span className="text-slate-100 font-medium text-sm">{`Humidity: ${props.weatherInfo.humidity} %`}</span>
        </div>
        <div className="flex justify-evenly items-center bg-black py-5 rounded-lg">
          <BsFillSunriseFill className="text-white" size={28} />
          <span className="text-slate-100 font-medium text-sm">{`Sunrise: ${transformedSunrise}`}</span>
        </div>
        <div className="flex justify-evenly items-center bg-black py-5 rounded-lg">
          <BsFillSunsetFill className="text-white" size={28} />
          <span className="text-slate-100 font-medium text-sm">{`Sunset: ${transformedSunset}`}</span>
        </div>
        <div className="flex justify-evenly items-center bg-black py-5 rounded-lg">
          <WiBarometer className="text-white" size={34} />
          <span className="text-slate-100 font-medium text-sm">{`Pressure: ${transformedPressure} inHg`}</span>
        </div>
        <div className="flex justify-evenly items-center bg-black py-5 rounded-lg">
          <BsFillCloudFill className="text-white" size={24} />
          <span className="text-slate-100 font-medium text-sm">{`Cloudiness: ${props.weatherInfo.cloudiness} %`}</span>
        </div>
        <div className="flex justify-evenly items-center bg-black py-5 rounded-lg">
          <MdVisibility className="text-white" size={28} />
          <span className="text-slate-100 font-medium text-sm">{`Visibility: ${transformedVisibility} mi`}</span>
        </div>
        <div className="flex justify-evenly items-center bg-black py-5 rounded-lg">
          <BsWind className="text-white" size={28} />
          <span className="text-slate-100 font-medium text-sm">{`Wind: ${transformedWindSpeed} mph`}</span>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CurrentWeatherDetails;
