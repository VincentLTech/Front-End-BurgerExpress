import React from "react";
import "../NavBar.css"; 
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    /*
    <ul>
      <li><a class="active" href="#home">Home</a></li>
      <li><a href="#news">News</a></li>
      <li><a href="#contact">Contact</a></li>
      <li style="float:right"><a href="#about">About</a></li>
    </ul>*/

    <div className="navbar">
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="Menu">Menu</Link>
                
                <Link to="login">Login</Link>
                <Link to="register">Register</Link>
             
            </div>
            
        </div>


        /*
    <div className={"nav"}>
      <Link to="/">
        <button className={"home"}>Home </button>
      </Link>
      <Link to="/menu">
        <button className={"menu"}>Menu </button>
      </Link>
    </div>
    */
  );
}
