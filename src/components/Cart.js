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
        for (let i in cartItem) {
          if (i == tempItem[j].id) {
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
    await Axios.post(`http://localhost:8080/api/orders/newOrder`, {
      cartItem,
    }).then((response) => {
      const respo = response.data;

      return response.data;
    });
  }
  function hanldeRemove(id, price) {
    let output = menuItems.filter((obj) => obj.id !== id);
    setMenuItems(output);
    setTotalPrice(totalPrice - price);
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
            <div>
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
