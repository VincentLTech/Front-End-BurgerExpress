import React, { useState } from "react";
import Axios from "axios";
import { Navigate } from "react-router-dom";
import "../Login.css";

import grillBg from "./images/grill-bg.jpeg";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    await Axios.post(
      `https://backend-burger-express.herokuapp.com/api/customer/login`,
      {
        email: email,
        password: password,
      }
    ).then((response) => {
      const respo = response.data;
      localStorage.setItem("name", respo.firstName);
      localStorage.setItem("id", respo.id);
      // if (response.status == 200)
      setRedirect(true);

      //   console.log(response);
      //   if (response.data.accessToken) {
      //     localStorage.setItem("user", JSON.stringify(response.data));
      //   const initialValueJson = JSON.parse(initialValue);
      //   }
      //   const saved = localStorage.getItem("user");
      //   const initialValue = JSON.parse(saved);

      // localStorage.setItem("user", JSON.stringify(response.data));
      return response.data;
    });
  }
  //   if you enter the correct logins go to home
  if (redirect) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <img src={grillBg} id="login-bg-img" alt="" />
      <div id="login-body">
        <form className="form" onSubmit={handleSubmit}>
          <div>
            <label>Email: </label>
            <input
              type="text"
              name="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label>Password: </label>
            <input
              type="Password"
              name="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <input className="submitBtn" type="submit" value="Submit"></input>
          </div>
        </form>
      </div>
    </div>
  );
}
