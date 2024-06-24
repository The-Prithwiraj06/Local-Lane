import React, { useContext } from "react";
import { useState } from 'react';
// import classes from "./StoreDisplay.module.css";
import Map from "./Map"
import "./D.css"

const D = (props) => {
  const [showCurtain, setShowCurtain] = useState(false);

  return (
    <div class="text-gray-700 text-center back px-4 py-2 m-2">
      <div class="max-w-sm rounded overflow-hidden shadow-lg">
        <img style={{ width: "200px", height: "300px" }} class="w-full" src={props.prod.imageUrl} alt="Sunset in the mountains" />
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">{props.prod.title}</div>
          <p class="text-gray-700 text-base">
            Donated By: {props.prod.donor}</p>
        </div>
        <div class="px-6 pt-4 pb-2">
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"><button onClick={() => setShowCurtain(!showCurtain)}>#Location</button></span>
          {showCurtain && (
            <div>
              <div style={{ height: "200px", width: "300px" }}> <Map /> </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default D;