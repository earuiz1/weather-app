import React, { useState } from "react";

const SearchBar = (props) => {
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
      props.onFetchWeather(query, "metric");
      setQuery("");
    }
  };

  return (
    <React.Fragment>
      <div className="flex justify-center bg-slate-900/30 border-slate-50 border-1 rounded-xl mx-5 py-4 px-3">
        <input
          className="bg-transparent w-full border-black border-r-0 border-1 rounded-l-lg 
          outline-0  text-slate-50 py-2 px-2 font-semibold"
          type="text"
          placeholder="Search for a city..."
          onChange={changeHandler}
          value={query}
          required
        />
        <button
          className="bg-gray-800 text-slate-50 rounded-r-lg px-3"
          onClick={clickHandler}
        >
          Search
        </button>
      </div>
    </React.Fragment>
  );
};

export default SearchBar;
