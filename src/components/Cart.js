import React, { useEffect, useState } from "react";
import Axios from "axios";
import { useLocation } from "react-router-dom";
import MiniDishCard from "./MiniDishCard";

export default function Cart(props) {
  const location = useLocation();
  const [cartItem, setCartItem] = useState(location.state.addedItems);
  const [menuItems, setMenuItems] = useState([]);
  const [holder, setMenuHolder] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);
  const [checkedOut, setCheckedOut] = useState(false);

  useEffect(() => {
    async function fectchData() {
      const menuItemsAPi = await Axios.get(
        `https://backend-burger-express.herokuapp.com/api/menu`
      );
      //   console.log("this", menuItemsAPi);
      menuItemsAPi.data.sort(function (a, b) {
        return a.type - b.type;
      });
      // setMenuItems(menuItemsAPi.data);
      const tempItem = menuItemsAPi.data;
      console.log(cartItem);

      let itemsMenu = [];
      let total = 0;
      for (let j = 0; j < tempItem.length; j++) {
        console.log("total: " + total);
        for (let i = 0; i < cartItem.length; i++) {
          if (cartItem[i] == tempItem[j].id) {
            itemsMenu.push(tempItem[j]);

            total = parseFloat(total) + parseFloat(tempItem[j].price);
            setTotalPrice(total);
            setMenuItems(itemsMenu);
          }
        }
      }
    }
    fectchData();

    // console.log("this is holder" + holder);
    // console.log(holder);
  }, []);

  async function hanldeCheckout() {
    await Axios.post(
      `https://backend-burger-express.herokuapp.com/api/orders/newOrder`,
      {
        order: "Pending",
        customerId: localStorage.getItem("id"),
        items: cartItem,
      }
    ).then((response) => {
      const respo = response.data;

      return response.data;
    });
    setCheckedOut(true);
  }
  function hanldeRemove(id, price) {
    let output = menuItems.filter((obj) => obj.id !== id);
    setMenuItems(output);
    setTotalPrice(totalPrice - price);
  }
  if (checkedOut) {
    return (
      <div
        style={{
          height: "400px",
        }}
        id="cart-body"
      >
        <h2 id="cart-h"> </h2>
        <h1
          style={{
            position: "fixed",
            right: "45%",
            left: "45%",
            height: "400px",
          }}
        >
          {" "}
          Working On Your Order
        </h1>
      </div>
    );
  }

  return (
    <div id="cart-body">
      <h2 id="cart-h"> Your Order </h2>
      <h4 className="cart-h4">Items</h4>
      {/* Map order items here */}
      <div id="cart-list">
        {menuItems.map((item) => {
          //   return <MiniDishCard item={item} />;
          return (
            <div key={item.id}>
              <p id="item-name">{item.name}</p>
              <p id="item-price">$ {item.price}</p>
              <button
                id="item-remove"
                onClick={() => {
                  hanldeRemove(item.id, item.price);
                }}
              >
                Remove
              </button>
            </div>
          );
        })}
      </div>
      <h4 className="cart-h4" id="cart-total-h">
        Total:{" "}
      </h4>
      <p id="cart-total">$ {totalPrice}</p>
      <button onClick={hanldeCheckout}>Check Out </button>
    </div>
  );
}
