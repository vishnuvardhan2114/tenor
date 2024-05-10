import React, { useEffect, useState } from "react";
import TrendCard from "./TrendCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [trendCard, setTrendCard] = useState([]);
  const ApiKey = "AIzaSyAZMb1aENm18JUTh-vWL98DpXbCs3pFw2Q";
  const limit = 20;
  const search_term = "trending tenor search";

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://tenor.googleapis.com/v2/search?q=${search_term}&key=${ApiKey}&limit=${limit}`
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setTrendCard(data.results);
    } catch (error) {
      console.error("There was a problem with your fetch operation:", error);
    }
  };

  return (
    <div className="px-[14.5%] pt-[10px] overflow-hidden ">
      <h1 className="text-[26px] font-bold">Trending Tenor Searches</h1>
      <Slider {...settings}>
        {trendCard.map((banner) => (
          <div key={banner.id} className="focus:outline-none overflow-hidden">
            <TrendCard trendCard={banner} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Hero;
