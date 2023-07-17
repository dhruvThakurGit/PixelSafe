import React from "react";
import CustomButton from "../components/CustomButton";
import { useStateContext } from "../context";
import Display from "../components/Display";
import { ConnectWallet } from "@thirdweb-dev/react";
import Loader from "../components/Loader";

const Images = () => {
  const { address } = useStateContext();
  return (
    <div>
      {address ? (
        <div>
          <Display />
        </div>
      ) : (
        <div className="mt-12">
          <ConnectWallet theme="dark" btnTitle="Connect Wallet" />
        </div>
      )}
    </div>
  );
};

export default Images;
