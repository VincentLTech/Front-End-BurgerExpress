import React, { useState } from "react";
import Axios from "axios";

import "../Login.css";

import grillBg from "./images/grill-bg.jpeg";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log("response");
  async function handleSubmit(e, values) {
    e.preventDefault();
    await Axios.post(`http://localhost:8080/api/customer/login`, {
      email: "alshohateeaseel@gmail.com",
      password: "1234",
    }).then((response) => {
      console.log(response);
      localStorage.setItem("user", JSON.stringify(response.data));
      //   if (response.data.accessToken) {
      //     localStorage.setItem("user", JSON.stringify(response.data));
      //   }

      return response.data;
    });
  }

  return (
    <div>
      <img src={grillBg} id="login-bg-img" />
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
              type="text"
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
