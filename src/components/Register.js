import React, { useEffect, useState } from "react";
import Axios from "axios";

import "../Register.css";
import grillBg from "./images/NYPizzaPie.jpg";
export default function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConf, setPasswordConf] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [redirect, setRedirect] = useState(false);

  async function handleSubmit(e, values) {
    e.preventDefault();
    console.log("wow");
    if (passwordConf === password) {
      await Axios.post(
        `https://backend-burger-express.herokuapp.com/api/customer/register`,
        {
          firstName,
          lastName,
          phoneNumber,
          email,
          password,
        }
      );
      setRedirect(true);
    } else {
      console.log("the password did not match ");
      setRedirect(false);
    }
  }

  return (
    <div>
      <img src={grillBg} id="register-bg-img" />
      <div id="register-body">
        <form className="form" onSubmit={handleSubmit}>
          <div>
            <label>First Name: </label>
            <input
              type="text"
              name="first"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div>
            <label>Last Name: </label>
            <input
              type="text"
              name="last"
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div>
            <label>Phone: </label>
            <input
              type="text"
              name="phone"
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <div>
            <label>Email: </label>
            <input
              type="email"
              name="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label>Password: </label>
            <input
              type="password"
              name="last"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <label>Confirm Password: </label>
            <input
              type="password"
              name="email"
              onChange={(e) => setPasswordConf(e.target.value)}
            />
          </div>
          <div>
            <input className="submitBtn" type="submit" value="Submit" />
          </div>
        </form>
      </div>
    </div>
  );
}
