import React from "react";
import { NavLink} from "react-router-dom/"

const Navlinks=props=>{
    return (
        <ul>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/">Category</NavLink>
            </li>
            <li>
                <NavLink to="/">About Us</NavLink>
            </li>
        </ul>
    )
}
export default Navlinks;