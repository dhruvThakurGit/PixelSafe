import React, { useContext, useEffect, useState } from "react";
import CustomButton from "./CustomButton";
import axios from "axios";
import { useStateContext } from "../context";
import Loader from "./Loader";

const Add = () => {
  const [file, setFile] = useState(null);
  const [loading, setloading] = useState(false);
  const { addUrl } = useStateContext();

  const retrieve = (e) => {
    const data = e.target.files[0];
    const reader = new window.FileReader();
    reader.readAsArrayBuffer(data);
    reader.onloadend = () => {
      setFile(e.target.files[0]);
    };
  };

  const uploadIFS = async (file) => {
    setloading(true);
    if (file) {
      try {
        const formData = new FormData();
        formData.append("file", file);
        const resFile = await axios({
          method: "post",
          url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
          data: formData,
          headers: {
            pinata_api_key: `1f5b4bb014cc1a60fabf`,
            pinata_secret_api_key: `c6e7b1e4a5737f046b5764ed69cf8c223c9e1b8ef4d47c78847e31d57465a431`,
            "Content-Type": "multipart/form-data",
          },
        });
        const ImgHash = `https://gateway.pinata.cloud/ipfs/${resFile.data.IpfsHash}`;
        addUrl(ImgHash);
        setFile(null);
      } catch (error) {
        console.log(error, "Could not upload ");
      }
    }
    setloading(false);
  };

  return (
    <div>
      {loading && <Loader />}
      <input
        type="file"
        name="avatar"
        accept="image/png, image/jpeg"
        className="btn2 float-left "
        onChange={retrieve}
      />

      {file ? (
        <CustomButton
          btnType="button"
          title={"Upload"}
          handleClick={() => {
            uploadIFS(file);
          }}
          styles={"btn upload extra"}
          extra={"extra"}
        />
      ) : (
        <br />
      )}
    </div>
  );
};

export default Add;
