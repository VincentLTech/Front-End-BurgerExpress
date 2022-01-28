import React, { useEffect, useState } from "react";
import MiniDishCard from "./MiniDishCard";
import Axios from "axios";
import { Link } from "react-router-dom";

const cardStyle = {
  display: "inline-block",
};

export default function Menu() {
  const [menuItems, setMenuItems] = useState([]);
  const [holder, setMenuHolder] = useState({});
  const [addedItems, setAddedItems] = useState([]);

  useEffect(() => {
    async function fectchData() {
      const menuItemsAPi = await Axios.get(
        `https://backend-burger-express.herokuapp.com/api/menu`
      );
      console.log("this", menuItemsAPi);
      menuItemsAPi.data.sort(function (a, b) {
        return a.type - b.type;
      });
      setMenuItems(menuItemsAPi.data);
    }
    fectchData();

    console.log("this is holder" + holder);
    console.log(holder);
  }, []);
  function addItemToCart(item) {
    console.log("clicked in the mini");
    setAddedItems([...addedItems, item]);
    console.log(addedItems);
  }
  //   function structureCreater() {
  //     let temp = { entree: [], appetizer: [], dessert: [], drink: [] };
  //     // eslint-disable-next-line no-undef
  //     menuItems.forEach((i) => {
  //       if (i.type === "entree") {
  //         temp["entree"].push(i);
  //       } else if (i.type === "appetizer") {
  //         temp["appetizer"].push(i);
  //       } else if (i.type === "dessert") {
  //         temp["dessert"].push(i);
  //       } else if (i.type === "drink") {
  //         temp["drink"].push(i);
  //       }
  //     });
  //     console.log(temp);
  //     setMenuHolder(temp);
  //   }

  //   console.log("this", menuItems);
  //   Object.assign({}, ...menuItems.map((x) => ({ [x.type]: x })));
  return (
    <div id="menu-body">
      <h3 id="menu-cart-h">
        {/* <Link to="/Cart">View Cart</Link> */}
        {console.log(addedItems)}
        <Link to={"/Cart"} state={{ addedItems }}>
          View Cart
        </Link>
      </h3>
      <h2 className="dish-type">ENTREES</h2>
      {menuItems.map((item) => {
        return (
          <>
            {item.type === "entree" ? (
              <MiniDishCard item={item} getData={addItemToCart} />
            ) : (
              ""
            )}
          </>
        );
      })}
      <h2 className="dish-type">APPETIZER</h2>
      {menuItems.map((item) => {
        return (
          <>
            {item.type === "appetizer" ? (
              <MiniDishCard item={item} getData={addItemToCart} />
            ) : (
              ""
            )}
          </>
        );
      })}
      <h2 className="dish-type">DESSERT</h2>
      {menuItems.map((item) => {
        return (
          <>
            {item.type === "dessert" ? (
              <MiniDishCard item={item} getData={addItemToCart} />
            ) : (
              ""
            )}
          </>
        );
      })}
      <h2 className="dish-type">DRINKS</h2>
      {menuItems.map((item) => {
        return (
          <>
            {item.type === "drink" ? (
              <MiniDishCard item={item} getData={addItemToCart} />
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
  );
}
