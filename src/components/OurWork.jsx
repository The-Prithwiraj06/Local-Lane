import React, { useState, useEffect, useRef } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { motion, useInView } from "framer-motion";
import "./OurWork.css";

const OurWork = () => {
  const [isMouseInside, setIsMouseInside] = useState(false);

  const handleMouseEnter = () => {
    setIsMouseInside(true);
  };

  const handleMouseLeave = () => {
    setIsMouseInside(false);
  };

  const ref = useRef(null);
  const isInView = useInView(ref);

  // useEffect(()=>{

  // })

  return (
    <div ref={ref} className="ourwork">
      {/* <h1 className= 'head text-5xl font-semibold pb-8'>Our Work</h1> */}
      <h1 className={`text-5xl font-semibold pb-8 ${isInView ? "head" : ""}`}>
        Our Work
      </h1>

      <div className=" cont1 text-left	">
        <p
          className={`text ${
            isInView
              ? "animate-fade animate-once animate-duration-[6000ms]"
              : ""
          }`}
        >
         "From compassion to action, our full-stack donation platform bridges
          the gap between those who want to help and those who need it most. In
          a world where giving meets technology, miracles happen. Join us in
          revolutionizing generosity through our full-stack donation platform...."
        </p>
      </div>

      <div className=" cont2 text-left	">
        <p
          className={`text ${
            isInView
              ? "animate-fade animate-once animate-duration-[6000ms]"
              : ""
          }`}
        >
          "Together, we can make a difference. Our full-stack donation platform
          empowers communities to support those in need.Every act of kindness,
          no matter how small, has the power to change lives. Our full-stack
          donation platform is here to amplify those acts..."
        </p>
      </div>

      <button className="btn-1">Explore</button>
    </div>
  );
};
export default OurWork;
