import "./NavbarStyles.css";
import React, { useState } from 'react';
import {Link} from  "react-router-dom";
import {FaBars,FaTimes}  from "react-icons/fa";
const Navbar = () => {


  const [click,setClick]=useState(false);
  const handleClick = () => setClick(!click);

  const [color,setColor]=useState(false);
  const changeColor=()=>{
    if (window.scrollY>=100){
      setColor(true);
    }else{
      setColor(false);
    }
  };

  window.addEventListener("scroll",changeColor)
  return (
    <div className={color ? "header header-bg" : "header"}>

        <Link to="/">
          <h1> AESOFT </h1>
        </Link>
        <ul className={click ? "nav-menu active" : "nav-menu"}> 
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Project">Projects</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
        <div className="humberger" onClick={handleClick}>
          {click ? (<FaTimes size={24}  style={{color:"yellow"}}/>)
          :(<FaBars size={24}  style={{color:"yellow"}}/>)
        }
            
        </div>
    </div>
  );
};

export default Navbar;