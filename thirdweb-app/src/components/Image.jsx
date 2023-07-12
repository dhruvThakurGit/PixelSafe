import React from "react";

const Image = ({ image, i }) => {
  return (
    <div className=" cursor-pointer  " key={i}>
      <a href={image} key={i} target="_blank">
        <img src={image} alt="Image" key={i} className="rounded-[12px]" />
      </a>
    </div>
  );
};

export default Image;
