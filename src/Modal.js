import React, { useState, useRef } from "react";
import "./App.css";
export default function Modal(props) {
  const croppingRef = useRef(null);
  const [isCropped, setCropped] = useState(null);
  const [croppedImg, setCroppedImg] = useState(null);

  const [imgSrc, setImgSrc] = useState("");
  // const imgRef = useRef(null)
  const [crop, setCrop] = useState();
  const [completedCrop, setCompletedCrop] = useState();
  //   const [scale, setScale] = useState(1)
  //   const [rotate, setRotate] = useState(0)
  // const [aspect, setAspect] = useState(16 / 9)
  if (!props.show) {
    return null;
  }

  const handleImageChange = (e) => {
    setImgSrc(e.target.files[0]);
  };
  return (
    <>
      <div className="modal">
        <div className="modal_container">
          <div className="modal_body">
            {/* <input type="file" id='imgInp' onchange="loadFile(event)"/> */}
          </div>
          {/* {imgSrc && (
      <img
         id='blah'
        alt="Crop me"
        src={imgSrc}
      />
    //   style={{ transform: `scale(${scale}) rotate(${rotate}deg)` }}     src={imgSrc}
  )} */}
          <img
            id="blah"
            alt="yourimage"
            style={{ width: "200px", height: "200px" }}
            src={
              imgSrc
                ? URL.createObjectURL(imgSrc)
                : "https://flowbite.com/docs/images/people/profile-picture-3.jpg"
            }
          />
          <input
            type="file"
            onChange={handleImageChange}
            // onchange="document.getElementById('blah').src = window.URL.createObjectURL(this.files[0])"
          />
          <button>Send</button>
        </div>
      </div>
    </>
  );
}
