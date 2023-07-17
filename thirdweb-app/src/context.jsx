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
  const [changeFlag, setchangeFlag] = useState(true);
  const [loading, setisloading] = useState(false);

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

  const displayOther = async (addr) => {
    setisloading(true);
    try {
      const data = await contract.call("display", [address, addr]);
      setUrl(data);
    } catch (error) {
      setUrl(false);
    }
    setisloading(false);
  };

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
    setisloading(true);
    console.log(contract);
    await contract.call("add", [address, url]);
    setisloading(false);
  };
  const allowUser = async (addAddr) => {
    setisloading(true);
    console.log("Adding ", addAddr);
    await contract.call("allow", [address, addAddr]);
    setisloading(false);
  };
  const denyUser = async (removeAddr) => {
    setisloading(true);

    console.log("Removing ", removeAddr);
    await contract.call("deny", [address, removeAddr]);
    setisloading(false);
  };

  const getAccessList = async () => {
    return contract.call("getAccessList", [address]);
  };
  const getPhotos = async () => {
    setisloading(true);
    const data = await contract.call("getPhotos", [address]);
    setisloading(false);
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
        changeFlag,
        loading,
        setchangeFlag,
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
