import React from "react";
import ReactDOM from "react-dom/client";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { Sepolia } from "@thirdweb-dev/chains";
import "./index.css";

import App from "./App";
import { StateContextProvider } from "./context";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ThirdwebProvider activeChain={Sepolia}>
    <StateContextProvider>
      <App />
    </StateContextProvider>
  </ThirdwebProvider>
);
