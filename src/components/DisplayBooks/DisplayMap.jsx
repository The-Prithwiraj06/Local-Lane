 import { dividerClasses } from "@mui/material";
 import Map from "./Map"
import React from "react";
 
 export default function DisplayMap(){
    return (
        <div>
            <div style={{height:"300px", width:"300px"}}> <Map/> </div>
        </div>
    );

 }