import React from "react";

const ForecastDetails = (props) => {
  return (
    // <React.Fragment>
    //   {/* Main Container */}
    //   <div className="flex flex-col gap-4  bg-slate-900  max-w-3xl border-2 rounded-xl border-slate-50 mt-12 mx-auto px-5 py-5">
    //     {/* Main Container Title */}
    //     <div className="flex border-b-2 border-slate-50">
    //       <span className="text-slate-50 font-bold text-2xl">
    //         5-Day Forecast
    //       </span>
    //     </div>
    //     {/* Forecast Item Container */}
    //     <div className="flex flex-row justify-between">
    //       {props.forecast.map((item) => {
    //         return (
    //           <div
    //             key={item.id}
    //             className="flex flex-col items-center text-slate-50"
    //           >
    //             <span className="text-lg font-semibold">{item.day}</span>
    //             <img
    //               src={`http://openweathermap.org/img/wn/${item.icon}.png`}
    //               alt="weather_icon"
    //               width="50"
    //               height="50"
    //             />
    //             <span className="text-lg font-bold">{item.temperature} °C</span>
    //           </div>
    //         );
    //       })}
    //     </div>
    //   </div>
    // </React.Fragment>

    <React.Fragment>
      {/* Main Container */}
      <div className="flex flex-col bg-slate-900/50 border-1 border-slate-50/70 min-w-[250px] rounded-xl mx-5">
        {/* Main Container Title */}
        <div className="flex justify-center border-b-2 border-slate-50/10 py-2 px-2">
          <span className="text-slate-50 font-bold text-2xl">
            5-Day Forecast
          </span>
        </div>
        {/* Forecast Item Container */}
        <div className="flex flex-col">
          {props.forecast.map((item) => {
            return (
              <div
                key={item.id}
                className="flex flex-row justify-evenly items-center text-slate-50 py-2"
              >
                <span className="text-md font-semibold">{item.day}</span>
                <img
                  src={`http://openweathermap.org/img/wn/${item.icon}.png`}
                  alt="weather_icon"
                  className="h-10 w-10"
                />
                <span className="text-md font-bold">{item.temperature} °C</span>
              </div>
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
};

export default ForecastDetails;
