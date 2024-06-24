import React from "react";
import Typography from "@mui/material/Typography";
import "./HomeText.css";
import img from "./Picture1.jpg";
import Navbar from "./Navbar";

const HomeText = () => {
  return (
    <div className="demo2">
      <Navbar />
      <div className="d1">
        <p className="P1 animate-fade-right">LET'S BRING A CHANGE</p>
        <p className="P2 animate-fade-right animate-duration-[2000ms]">IN</p>
        {/* <h1 className="text-3xl font-bold underline animate-spin">
                    Hello world!
                </h1> */}
        <h1 className="so animate-fade-right animate-duration-[2000ms]">
          {" "}
          SOCIETY
        </h1>
        <p className="P4 animate-fade-down animate-duration-[2000ms] animate-delay-[1000ms]">
          Your change can build <br /> someone's future ..
        </p>
        <button className="btn animate-fade animate-duration-[2000ms] animate-delay-[2000ms]">
          Join Us
        </button>
      </div>
      {/* <span className="P1">
    LET'S BRING A CHANGE <br />
    </span>
    <span className="P2">
    IN
    </span> */}
      {/* <div>
       
    </div>
    <div><p className='P4'>Your change can build <br /> someone's future ..</p></div>
    <button className='btn'>Join Us</button> */}
      <div className="demo"></div>
      <img className="img" src={img} alt="" />
      {/* <div className='blur'></div> */}
    </div>
  );
};

export default HomeText;
