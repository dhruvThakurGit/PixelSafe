import React, { useEffect, useState } from "react";
import { useStateContext } from "../context";
import { copy, loader } from "../assets";
import Loader from "./Loader";

const ShowOther = ({ change, array }) => {
  const [value, setValue] = useState("");
  const { address, contract, displayOther, displayflag, loading } =
    useStateContext();

  useEffect(() => {
    setValue(address);
    console.log("Hello");
  }, [address, contract, displayflag]);

  const handleChange = (event) => {
    if (change) {
      displayOther(event.target.value);
    }
    setValue(event.target.value);
  };
  const handleCopy = (event) => {
    navigator.clipboard.writeText(value);
  };

  return (
    <div className="showOther flex place-content-center font-medium ">
      <div className="flex-basis-2">
        <select value={value} onChange={handleChange}>
          {array.map((option, i) => {
            if (address == option) {
              return (
                <option key={i} value={option}>
                  Your account
                </option>
              );
            } else {
              return (
                <option key={i} value={option}>
                  {option}
                </option>
              );
            }
          })}
        </select>
      </div>

      <div className="flex-basis-2 ml-2 cursor-pointer " onClick={handleCopy}>
        <img src={copy} />
      </div>
    </div>
  );
};

export default ShowOther;
