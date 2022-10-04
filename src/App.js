import React from "react";
import Nav from "./components/Nav/Nav";
import SearchBar from "./components/SearchBar";

const App = () => {
  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <SearchBar />
    </div>
  );
};

export default App;
