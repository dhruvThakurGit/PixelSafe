import React, { useContext, createContext, useEffect, useState } from "react";
import {
  useAddress,
  useContract,
  useMetamask,
  useContractRead,
} from "@thirdweb-dev/react";

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const [displayFlag, setdisplayFlag] = useState(true);
  const [url, setUrl] = useState([]);
  const { contract } = useContract(
    "0xA089383799141f23f46F04603539850F7566CF83"
  );
  const [addrArr, setaddrArr] = useState([]);
  const [accessArr, setaccessArr] = useState([]);

  const connect = useMetamask();
  var address = useAddress();

  useEffect(() => {
    if (address && contract) {
      fetchUrls();
      fetchaddrArr();
      fetchaccessArr();
    }
  }, [displayFlag, address, contract]);

  const fetchaddrArr = async () => {
    const data = await contract.call("getUsers");
    setaddrArr(data);
  };
  const fetchaccessArr = async () => {
    getAccessList().then((res) => {
      setaccessArr(res);
    });
  };
  const fetchUrls = async () => {
    const data = await getPhotos();
    setUrl(data);
  };

  const addUrl = async (url) => {
    console.log(contract);
    await contract.call("add", [address, url]);
  };
  const allowUser = async (addAddr) => {
    console.log("Adding ", addAddr);
    await contract.call("allow", [address, addAddr]);
  };
  const denyUser = async (removeAddr) => {
    console.log("Removing ", removeAddr);
    await contract.call("deny", [address, removeAddr]);
  };
  const displayOther = async (address) => {
    console.log(address);
  };
  const getAccessList = async () => {
    return contract.call("getAccessList", [address]);
  };
  const getPhotos = async () => {
    const data = await contract.call("getPhotos", [address]);
    return data;
  };
  const getUsers = async () => {
    return await contract.call("getUsers", [address]);
  };

  return (
    <StateContext.Provider
      value={{
        address,
        contract,
        url,
        displayFlag,
        addrArr,
        accessArr,
        setdisplayFlag,
        connect,
        addUrl,
        allowUser,
        denyUser,
        displayOther,
        getAccessList,
        getPhotos,
        getUsers,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
