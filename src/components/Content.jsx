import React, { useState, useEffect, useRef } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { motion, useInView } from "framer-motion";
import "./Content.css";

const Content = () => {
  const [isMouseInside, setIsMouseInside] = useState(false);

  // const handleMouseEnter = () => {
  //     setIsMouseInside(true);
  // };

  // const handleMouseLeave = () => {
  //     setIsMouseInside(false);
  // };

  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <div className="table-box">
      <div ref={ref}  className="table-row">
        <div  className="table-cell">
          <img className="im" src="/image/donate.jpg" alt=""></img>
        </div>
        <div  className="table-cell content">
          <h2
            className={`text-2xl hRclass font-semibold ${
              isInView ? "headc" : ""
            }`}
          >
            Give the gift of knowledge with a book donation
          </h2>

          <p
            className={` paraR ${
              isInView
                ? "animate-fade animate-once animate-duration-[6000ms]"
                : ""
            }`}
          >
            Book donations keep the joy of reading alive for more people. Spread
            knowledge and fuel dreams through the gift of books. Every book
            donation makes a difference in enriching and transforming lives
            through the magic of reading. Books have the power to enlighten and
            inspire, so donate yours today!
          </p>
        </div>
      </div>
      <div  className="table-row">
        <div ref={ref} className="table-cell">
          <h2
            className={`text-2xl h2class font-semibold ${
              isInView ? "headc" : ""
            }`}
          >
            One person's trash is another person's treasure - donate!
          </h2>
          <p
            className={`text para ${
              isInView
                ? "animate-fade animate-once animate-duration-[6000ms]"
                : ""
            }`}
          >
            Donated clothing is a major source of funding for charities. Donated
            items can also help people in need, such as disaster victims,
            veterans, and people with disabilities.
          </p>
        </div>
        <div className="table-cell">
          <img className="im" src="/image/cloth.jpeg" alt=""></img>
        </div>
      </div>
      <div className="table-row">
        <div className="table-cell">
          <img className="im" src="/image/dona.jpg" alt=""></img>
        </div>
        <div className="table-cell">
          <h2 className="text-2xl font-semibold">
            Books are treasures that should be shared.
          </h2>
          <p>
            Books help children make sense of the world around them, impart
            morals and values to them, often without sounding preachy, teach
            them empathy, and the difference between right and wrong. Moreover,
            children who can’t read are unable to learn and this impacts their
            schooling.
          </p>
        </div>
      </div>
      <div className="table-row">
        <div className="table-cell">
          <h2 className="text-2xl font-semibold">
            Something old, something new, donate your clothes too!
          </h2>
          <p>
            Donating clothes can help reduce landfills and textile waste. It can
            also reduce the demand for new clothes, which are resource-intensive
            to make.
          </p>
        </div>
        <div className="table-cell">
          <img className="im" src="/image/clothes.jpg" alt=""></img>
        </div>
      </div>
    </div>
  );
};
export default Content;
