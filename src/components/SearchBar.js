import React, { useState } from "react";

const SearchBar = ({ onFetchWeather }) => {
  /* A hook that is used to store the value of the input field. */
  const [query, setQuery] = useState("");

  /**
   * The changeHandler function is an event handler that takes an event as an argument and sets the query
   * state to the value of the event target
   * @param event - The event that triggered the change.
   */
  const changeHandler = (event) => {
    setQuery(event.target.value);
  };

  const clickHandler = () => {
    if (query.trim().length > 0) {
      onFetchWeather(query, "metric", true);
      setQuery("");
    }
  };

  return (
    <React.Fragment>
      <div className="flex w-full mx-5">
        <input
          className="bg-slate-900/30 w-full border-slate-50/30 border-1 border-r-0 rounded-l-lg 
          outline-0  text-slate-50 py-4 px-4 font-semibold"
          type="text"
          placeholder="Search for a city..."
          onChange={changeHandler}
          value={query}
          required
        />
        <button
          className="bg-slate-900 hover:bg-slate-700 border-slate-50/30 border-1 text-slate-50 rounded-r-lg px-3"
          onClick={clickHandler}
        >
          Search
        </button>
      </div>
    </React.Fragment>
  );
};

export default SearchBar;
