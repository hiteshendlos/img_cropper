import React, { useState } from "react";
import "./App.css";
import Modal from "./Modal";
import CropModal from "./MyComponent/CropModal";

export default function App() {
  const [show, setShow] = useState(false);

  return (
    <>
      {/* <div className='app'>
         <button onClick={()=>setShow(true)}>
           show
         </button>
         <Modal show={show}/>
      </div> */}
      {/* <Modal2 /> */}

      <CropModal />
    </>
  );
}
