import React, { useEffect, useState } from "react";
import "../NavBar.css";
import { Link } from "react-router-dom";

export default function NavBar() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {});

  useEffect(() => {
    if (localStorage.getItem("name")) {
      setName(localStorage.getItem("name"));
    }
  }, []);
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

        {name ? (
          <Link to="logout" onClick={() => setMessage("")}>
            logout
          </Link>
        ) : (
          <Link to="login" onClick={() => setMessage("logged")}>
            Login
          </Link>
        )}

        {/* <Link to="logout" onClick={() => setName("")}>
          Log Out
        </Link>

        <Link to="login" onClick={() => setName("logged")}>
          Login
        </Link> */}

        <Link to="register">Register</Link>
        <Link to="cart">Cart</Link>
        <p style={{ float: "right", color: "white", margin: "10px" }}>
          Hi {name}
        </p>
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
