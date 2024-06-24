// Example using Tailwind CSS classes
import React,{useContext} from 'react';
import { NavLink } from 'react-router-dom';
import "./Navbar.css"
import { UserContext } from './Sigin/UserContext';

const Navbar = () => {

    const {user,setUser}=useContext(UserContext)

    function handleLogout() {
        localStorage.removeItem("token");
        setUser(null);
    
        navigate("/");
      }

  return (
    <nav>
    <ul className="nav-links">
        <li>
            <NavLink to="/">Home</NavLink>
        </li>
        <li>
            <NavLink to="/categories">Books</NavLink>
        </li>
        <li>
            <NavLink to="/about">About Us</NavLink>
        </li>
        <li>
            <NavLink to="/contactUs">Contact Us</NavLink>
        </li>
        <li className="signin">
        {!user && <NavLink to="/login"><button className='btn'>Sign In</button></NavLink>}
        {user && <button className='btn' onClick={handleLogout}>Logout</button>}
        <NavLink to="/donate"><button className='btn'>Donate</button></NavLink>
        </li>
    </ul>
    </nav>
  );
};

export default Navbar;
