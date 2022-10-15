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

const ExtendedDetails = (props) => {
  const details = [
    {
      id: Math.random().toString(),
      icon: <BsThermometerSun className="text-white" size={19} />,
      title: "Feels Like: ",
      action: props.weatherInfo.feelsLikeTemp,
      symbol: " °C",
    },
    {
      id: Math.random().toString(),
      icon: <FaTemperatureHigh className="text-white" size={19} />,
      title: "High: ",
      action: props.weatherInfo.maxTemp,
      symbol: " °C",
    },
    {
      id: Math.random().toString(),
      icon: <FaTemperatureLow className="text-white" size={19} />,
      title: "Low: ",
      action: props.weatherInfo.minTemp,
      symbol: " °C",
    },
    {
      id: Math.random().toString(),
      icon: <WiHumidity className="text-white" size={22} />,
      title: "Humidity: ",
      action: props.weatherInfo.humidity,
      symbol: " %",
    },
    {
      id: Math.random().toString(),
      icon: <BsFillSunriseFill className="text-white" size={22} />,
      title: "Sunrise: ",
      action: props.weatherInfo.sunrise,
      symbol: "",
    },
    {
      id: Math.random().toString(),
      icon: <BsFillSunsetFill className="text-white" size={22} />,
      title: "Sunset: ",
      action: props.weatherInfo.sunset,
      symbol: "",
    },
    {
      id: Math.random().toString(),
      icon: <WiBarometer className="text-white" size={25} />,
      title: "Pressure: ",
      action: props.weatherInfo.pressure,
      symbol: " inHg",
    },
    {
      id: Math.random().toString(),
      icon: <BsFillCloudFill className="text-white" size={22} />,
      title: "Cloudiness: ",
      action: props.weatherInfo.cloudiness,
      symbol: " %",
    },
    {
      id: Math.random().toString(),
      icon: <BsWind className="text-white" size={22} />,
      title: "Wind: ",
      action: props.weatherInfo.windSpeed,
      symbol: " mph",
    },
  ];

  return (
    <React.Fragment>
      {details.map((detail) => {
        return (
          <div
            key={detail.id}
            className="flex justify-evenly items-center py-5 rounded-lg"
          >
            <span>{detail.icon}</span>
            <span className="text-slate-100 font-medium text-xs2">
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
