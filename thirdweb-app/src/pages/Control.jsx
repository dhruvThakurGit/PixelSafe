import React from "react";
import { useStateContext } from "../context";
import Access from "../components/Access";
import Add from "../components/Add";
import { ConnectWallet } from "@thirdweb-dev/react";
import { profile } from "../assets";

const Control = () => {
  const { address } = useStateContext();

  return (
    <div className="container h-full m-auto p-2 ">
      <div className="basis-1/6 text-8xl mb-[60px] ">
        <h1 className="title">PixelSafe</h1>
      </div>

      <div className="parent">
        <div className="child basis-1/6 text-left parent">
          <img
            width="64"
            height="64"
            src="https://img.icons8.com/nolan/64/contract-job.png"
            alt="contract-job"
          />
          <div>
            <h1 className="text-3xl">Account</h1>
            <h1>{address ? address : <pre>Please Connect</pre>}</h1>
          </div>
        </div>
        <div className="child">
          <ConnectWallet theme="light" btnTitle="Connect Wallet" />
        </div>
      </div>

      <div className="basis-1/6 ">
        <Add />
      </div>
      <div className="basis-3/6 ">
        <Access />
      </div>
    </div>
  );
};

export default Control;
