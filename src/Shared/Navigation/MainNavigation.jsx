import React from "react";
import { Link } from "react-router-dom";
import MainHeader from "./MainHeader";
import NavLinks from "./Navlinks";

const MainNavigation=props=>{
return(
    <MainHeader>
        <button>
            <span/><span/><span/>
        </button>
        <h1><Link>LOgo</Link></h1>
        <nav>
            <NavLinks/>
        </nav>
    </MainHeader>
)
}
export default MainNavigation;