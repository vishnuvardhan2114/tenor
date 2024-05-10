import React, { useEffect, useState } from "react";

import { Search } from "@mui/icons-material";

const SearchBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [filter, setFilter] = useState([]);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  const handleSearch = () => {
    setPage(1);
    fetchData();
  };
  const handleFilter = () => {
    const filtered = feedCard.filter((item) =>
      item.content_description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilter(filtered);
  };
  return (
    <div
      className={`w-full h-[70px] ${isScrolled ? "fixed top-0 " : "relative"}`}
      style={{
        backgroundImage:
          "linear-gradient(90deg, rgb(76 175 255), rgb(46 147 230))",
      }}
    >
      <div className="flex">
        <div className="w-[90%] ml-[15%] m-[10px] flex items-center ">
          {isScrolled ? (
            <img
              src="/tenor-logo-white.svg"
              alt="tenor-logo-white"
              width={80}
              height={17}
              className="ml-3 transition-opacity duration-[1s] ease-in"
            />
          ) : (
            <span></span>
          )}
          <form
            className={`w-[90%] ${
              isScrolled
                ? "pl-[1%] transition-pl duration-[1s] ease-in"
                : "w-[90%]"
            }`}
            onSubmit={(e) => {
              e.preventDefault();
              handleSearch();
            }}
          >
            <input
              type="text"
              className={`w-[85%] h-12 p-6 font-medium text-[18px] focus:outline-none ${
                isScrolled ? "shadow-md" : "shadow-sm"
              }`}
              placeholder="Search for GIFs and Stickers"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button type="submit" className="bg-white h-12 pt-1 pl-[0.5] w-10">
              <Search fontSize="medium" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
