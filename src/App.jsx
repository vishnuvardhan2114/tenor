import React from "react";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import Hero from "./components/Hero";
import Feed from "./components/Feed";

const App = () => {
  return (
    <div className="overflow-hidden bg-white">
      <Navbar />
      {/* <SearchBar /> */}
      <div className="bg-white overflow-hidden">{/* <Hero /> */}</div>
      <div>
        <Feed />
      </div>
    </div>
  );
};

export default App;
