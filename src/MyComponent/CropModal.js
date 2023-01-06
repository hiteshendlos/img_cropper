import React, { useState } from "react";
import "./crop.scss";
import ReactCrop from "react-image-crop";

const CropModal = () => {
  const [img, setImg] = useState();
  return (
    <div
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        right: 0,
        height: "100vh",
        weight: "100vw",
        border: "2px solid black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          height: "500px",
          width: "800px",
          border: "2px solid black",
        }}
      >
        child container
        <input
          type="file"
          onChange={(e) => {
            setImg(e.target.files[0]);
            // console.log(e.target.files[0]);
          }}
        />
        {img && <img src={img} />}
      </div>
    </div>
  );
};

export default CropModal;
