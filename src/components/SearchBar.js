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
      <div className="flex justify-center w-3/4 mx-auto my-8">
        <input
          className="bg-transparent border-black border-r-0 border-2 rounded-l-lg 
          outline-0 min-w-full text-slate-50 py-2 px-2"
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
