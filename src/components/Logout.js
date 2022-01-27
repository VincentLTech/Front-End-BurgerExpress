import React, { useEffect } from "react";
import Axios from "axios";
import { Navigate } from "react-router-dom";

import grillBg from "./images/grill-bg.jpeg";
export default function logout() {
  // eslint-disable-next-line react-hooks/rules-of-hooks

  localStorage.removeItem("name");
  localStorage.removeItem("id");

  return <div>You are logged Out</div>;
}
