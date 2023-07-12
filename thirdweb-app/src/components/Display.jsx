import React, { useEffect, useState } from "react";
import { useStateContext } from "../context";
import CustomButton from "./CustomButton";
import Image from "./Image";

const Display = () => {
  const { displayFlag, setdisplayFlag, addrArr, address } = useStateContext();
  const { url } = useStateContext();
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
    console.log(event.target.value);
  };

  return (
    <div>
      <div className="flex-row">
        <div className="pb-12 flex">
          <CustomButton
            btnType="button"
            title={"Get Photos"}
            handleClick={() => {
              setdisplayFlag(!displayFlag);
            }}
            styles={"btn"}
          />
        </div>
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
      </div>

      <div className="grid grid-cols-3 gap-3 pt-8">
        {url.map((item, i) => {
          return (
            <div key={i}>
              <Image image={item} i={i} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Display;
