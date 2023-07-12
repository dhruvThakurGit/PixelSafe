import React from "react";

const CustomButton = ({ btnType, title, handleClick, styles, extra }) => {
  return (
    <button type={btnType} className={`${styles} w-52`} onClick={handleClick}>
      <div className={extra}>{title}</div>
    </button>
  );
};

export default CustomButton;
