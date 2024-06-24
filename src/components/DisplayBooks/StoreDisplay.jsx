import React, { useContext } from "react";
// import classes from "./StoreDisplay.module.css";
import { Col } from "react-bootstrap";


const StoreDisplay = (props) => {
  
  return (
    <Col xs={6}>
      <div className="">
        <div className="">
  
            <h3>{props.prod.title}</h3>
          
        </div>
        <div className="">
          <img src={props.prod.imageUrl}></img>
        </div>
        <div >
          <div > ${props.prod.price}</div>
        </div>
      </div>
    </Col>
  );
};

export default StoreDisplay;