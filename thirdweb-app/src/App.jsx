import React from "react";
import Control from "./pages/Control";
import Images from "./pages/Images";

export default function App() {
  return (
    <div className="flex flex-row text-center justify-center absolute top-0 left-0 bottom-0 right-0 linear-gradient">
      <div className="basis-2/5  bg-gradient-to-r from-gray-500 to-transparent p-3 ">
        <Control />
      </div>
      <div className="basis-3/5 p-3">
        <Images />
      </div>
    </div>
    // ADBLOCKER
  );
}
