import React, { useEffect, useState } from "react";
import { useStateContext } from "../context";

const ShowOther = () => {
  const [value, setValue] = useState("");
  const { addrArr, address, contract, displayOther, displayflag } =
    useStateContext();

  useEffect(() => {
    setValue(address);
    console.log("Hello");
  }, [address, contract, displayflag]);

  const handleChange = (event) => {
    setValue(event.target.value);
    displayOther(event.target.value);
  };

  return (
    <div className="showOther">
      <select value={value} onChange={handleChange}>
        {addrArr.map((option, i) => {
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
  );
};

export default ShowOther;
