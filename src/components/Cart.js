import React, { useEffect, useState } from "react";
import Axios from "axios";
import { useLocation } from "react-router-dom";
export default function Cart(props) {
  const location = useLocation();
  const [item, setItem] = useState(location.state);
  console.log(item);
  //   useEffect(() => {
  //   }, []);
  async function handleClick() {
    // e.preventDefault();
    await Axios.post(`http://localhost:8080/api/orders/newOrder`, {
      item,
    }).then((response) => {
      const respo = response.data;
      //   localStorage.setItem("name", respo.firstName);
      //   localStorage.setItem("id", respo.id);
      //   setRedirect(true);
      console.log(respo);

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
  return (
    <div id="cart-body">
      <h2 id="cart-h"> Your Order </h2>
      <h4 className="cart-h4">Items</h4>
      {/* Map order items here */}
      <div id="cart-list">
        <p id="item-name">• Cheese Burger</p>
        <p id="item-price">$12.50</p>
        <button id="item-remove">Remove</button>
      </div>
      <h4 className="cart-h4" id="cart-total-h">
        Total:{" "}
      </h4>
      <p id="cart-total">$12.50</p>
      <button onClick={handleClick}>Check Out </button>
    </div>
  );
}
