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

const ExtendedDetails = ({ weather, isDefaultUnit }) => {
  const details = [
    {
      id: Math.random().toString(),
      icon: <BsThermometerSun className="text-white" size={19} />,
      title: "Feels: ",
      action: weather.feelsLikeTemp,
      symbol: isDefaultUnit ? " °C" : " °F",
    },
    {
      id: Math.random().toString(),
      icon: <FaTemperatureHigh className="text-white" size={19} />,
      title: "High: ",
      action: weather.maxTemp,
      symbol: isDefaultUnit ? " °C" : " °F",
    },
    {
      id: Math.random().toString(),
      icon: <FaTemperatureLow className="text-white" size={19} />,
      title: "Low: ",
      action: weather.minTemp,
      symbol: isDefaultUnit ? " °C" : " °F",
    },
    {
      id: Math.random().toString(),
      icon: <WiHumidity className="text-white" size={22} />,
      title: "Humidity: ",
      action: weather.humidity,
      symbol: " %",
    },
    {
      id: Math.random().toString(),
      icon: <BsFillSunriseFill className="text-white" size={22} />,
      title: "",
      action: weather.sunrise,
      symbol: "",
    },
    {
      id: Math.random().toString(),
      icon: <BsFillSunsetFill className="text-white" size={22} />,
      title: "",
      action: weather.sunset,
      symbol: "",
    },
    {
      id: Math.random().toString(),
      icon: <WiBarometer className="text-white" size={28} />,
      title: "",
      action: weather.pressure,
      symbol: " inHg",
    },
    {
      id: Math.random().toString(),
      icon: <BsFillCloudFill className="text-white" size={22} />,
      title: "Clouds: ",
      action: weather.cloudiness,
      symbol: " %",
    },
    {
      id: Math.random().toString(),
      icon: <BsWind className="text-white" size={22} />,
      title: "Wind: ",
      action: weather.windSpeed,
      symbol: " mph",
    },
  ];

  return (
    <React.Fragment>
      {details.map((detail) => {
        return (
          <div
            key={detail.id}
            className="flex justify-around items-center py-5"
          >
            <span>{detail.icon}</span>
            <span className="text-slate-100 font-medium text-xs md:text-[14px] lg:text-[14px]">
              {detail.title}
              {detail.action}
              {detail.symbol}
            </span>
          </div>
        );
      })}
    </React.Fragment>
  );
};

export default ExtendedDetails;
