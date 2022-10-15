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
      id: 1,
      icon: <BsThermometerSun className="text-white" size={19} />,
      title: "Feels Like: ",
      action: props.weatherInfo.feelsLikeTemp,
      symbol: " °C",
    },
    {
      id: 2,
      icon: <FaTemperatureHigh className="text-white" size={19} />,
      title: "High: ",
      action: props.weatherInfo.maxTemp,
      symbol: " °C",
    },
    {
      id: 3,
      icon: <FaTemperatureLow className="text-white" size={19} />,
      title: "Low: ",
      action: props.weatherInfo.minTemp,
      symbol: " °C",
    },
    {
      id: 4,
      icon: <WiHumidity className="text-white" size={22} />,
      title: "Humidity: ",
      action: props.weatherInfo.humidity,
      symbol: " %",
    },
    {
      id: 5,
      icon: <BsFillSunriseFill className="text-white" size={22} />,
      title: "Sunrise: ",
      action: props.weatherInfo.sunrise,
      symbol: "",
    },
    {
      id: 6,
      icon: <BsFillSunsetFill className="text-white" size={22} />,
      title: "Sunset: ",
      action: props.weatherInfo.sunset,
      symbol: "",
    },
    {
      id: 7,
      icon: <WiBarometer className="text-white" size={25} />,
      title: "Pressure: ",
      action: props.weatherInfo.pressure,
      symbol: " inHg",
    },
    {
      id: 8,
      icon: <BsFillCloudFill className="text-white" size={22} />,
      title: "Cloudiness: ",
      action: props.weatherInfo.cloudiness,
      symbol: " %",
    },
    {
      id: 9,
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
