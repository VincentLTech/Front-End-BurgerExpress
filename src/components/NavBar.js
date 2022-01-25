import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className={"nav"}>
      <Link to="/">
        <button className={"home"}>Home </button>
      </Link>
      <Link to="/menu">
        <button className={"menu"}>Menu </button>
      </Link>
    </div>
  );
}
