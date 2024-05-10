import React from "react";

const TrendCard = (props) => {
  const { trendCard } = props;
  const { media_formats, content_description } = trendCard;

  return (
    <div className="mt-10 px-3 overflow-hidden">
      <img
        className="rounded-md cursor-pointer"
        src={media_formats.tinygif.url}
        alt="image"
        style={{
          width: "110%",
          height: "90px",
          objectFit: "cover",
          overflow: "hidden",
        }}
      />
      <h1 className="font-medium text-[17.5px] mt-1">{content_description}</h1>
    </div>
  );
};

export default TrendCard;
