import React, { useEffect, useState } from "react";
import { Search } from "@mui/icons-material";
import TrendCard from "./TrendCard";
import Hero from "./Hero";

const Feed = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [feedCard, setFeedCard] = useState([]);
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("nature");
  const [filter, setFilter] = useState([]);
  const ApiKey = "AIzaSyAZMb1aENm18JUTh-vWL98DpXbCs3pFw2Q";
  const limit = 50;

  useEffect(() => {
    fetchData();
  }, [searchTerm, page]);
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.offsetHeight - 200
      ) {
        setPage(page + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [page]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://tenor.googleapis.com/v2/search?q=${searchTerm}&key=${ApiKey}&limit=${limit}&pos=${
          (page - 1) * limit
        }`
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      if (page === 1) {
        setFeedCard(data.results);
      } else {
        setFeedCard((prevFeedCard) => [...prevFeedCard, ...data.results]);
      }
    } catch (error) {
      console.error("There was a problem with your fetch operation:", error);
    }
  };

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
    <>
      <div
        className={`w-full h-[70px] ${
          isScrolled ? "fixed top-0 " : "relative"
        }`}
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
              <button
                type="submit"
                className="bg-white h-12 pt-1 pl-[0.5] w-10"
              >
                <Search fontSize="medium" />
              </button>
            </form>
          </div>
        </div>
      </div>
      <Hero />
      <div className="px-[14.5%] pt-[8px] ">
        <h1 className="font-bold text-[26px] pb-4">Featured GIFs</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
          {feedCard.map((item, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center"
            >
              <img
                src={item.media_formats.gif.url}
                alt={item.media_formats.mediumgif.url}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Feed;
