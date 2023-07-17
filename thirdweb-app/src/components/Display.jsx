import React, { useEffect, useState } from "react";
import { useStateContext } from "../context";
import CustomButton from "./CustomButton";
import Image from "./Image";
import ShowOther from "./ShowOther";

const Display = () => {
  const { displayFlag, setdisplayFlag } = useStateContext();
  const { url } = useStateContext();

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
        <p>You are viewing</p>
        <ShowOther />
      </div>

      {/* URL SET TO FALSE if access denied */}

      {url ? (
        <div className="grid grid-cols-3 gap-3 pt-8">
          {url.map((item, i) => {
            return (
              <div key={i}>
                <Image image={item} i={i} />
              </div>
            );
          })}
        </div>
      ) : (
        <div className="access-denied">
          <p>YOU DON'T HAVE ACCESS</p>
        </div>
      )}
    </div>
  );
};

export default Display;
