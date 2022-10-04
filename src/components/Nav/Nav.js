import React from "react";
import { TiWeatherPartlySunny } from "react-icons/ti";

const Nav = () => {
  return (
    <React.Fragment>
      <nav className="flex justify-between align-center bg-gray-800 py-5 px-4">
        <div className="flex gap-3">
          <TiWeatherPartlySunny className="text-white" size={28} />
          <h1 className="text-xl text-slate-50 font-bold">Weather App</h1>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Nav;
