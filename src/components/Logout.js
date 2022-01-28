import React, { useEffect } from "react";
import Axios from "axios";
import { Navigate } from "react-router-dom";
import "../Login.css";

import grillBg from "./images/feature-1.jpg";
export default function logout() {
  // eslint-disable-next-line react-hooks/rules-of-hooks

  localStorage.removeItem("name");
  localStorage.removeItem("id");

  return (
    <div>
        <img src={grillBg} id="login-bg-img" alt="" />
        <div id="login-body">
        <form className="form">

            <div>
                <label><i><center>Thank you for eating with us.</center> </i></label>
            </div>
            <div>
                <label><i><center>We hope to be serving you soon!</center></i> </label>
            </div>
            
        </form>
        </div>
    </div>
  );
}
