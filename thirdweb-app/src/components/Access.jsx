import React, { useState, useEffect } from "react";
import CustomButton from "./CustomButton";
import { useStateContext } from "../context";
import Loader from "./Loader";
import ShowOther from "./ShowOther";

const Access = () => {
  const [addAddr, setaddAddr] = useState("");
  const [removeAddr, setremoveAddr] = useState("");
  const { allowUser, denyUser, accessArr, loading } = useStateContext();
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
    console.log(event.target.value);
  };

  return (
    <div className="flex flex-col">
      {loading && <Loader />}

      <div className="basis-1/2">
        <h1 className="heading">Share access with</h1>
        <div className="input">
          <input
            type="text"
            placeholder="0xabc"
            className="placeholder"
            value={addAddr}
            onChange={(e) => {
              setaddAddr(e.target.value);
            }}
          />
          <CustomButton
            btnType="button"
            title={"Add Access"}
            handleClick={() => {
              allowUser(addAddr);
              setaddAddr("");
            }}
            styles={"btn upload extra share"}
            extra={"extra"}
          />
        </div>
        <h1 className="heading">Remove access with</h1>
        <div className="input">
          <input
            type="text"
            placeholder="0xabc"
            value={removeAddr}
            className="placeholder"
            onChange={(e) => {
              setremoveAddr(e.target.value);
            }}
          />
          <CustomButton
            btnType="button"
            title={"Remove Access"}
            handleClick={() => {
              denyUser(removeAddr);
              setremoveAddr("");
            }}
            styles={"btn upload extra share"}
            extra={"extra"}
          />
        </div>
      </div>

      <div className="basis-1/2 mt-10">
        {accessArr.length > 0 ? (
          <div>
            <div className="text-black font-semibold">
              <p>You have given access to</p>
            </div>

            <ShowOther change={false} array={accessArr} />
          </div>
        ) : (
          <h1>
            Give access through the <b>ADD ACCESS</b> button !
          </h1>
        )}

        <p>{value}</p>
      </div>
    </div>
  );
};

export default Access;
