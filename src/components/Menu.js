import React, { useEffect, useState } from "react";
import MiniDishCard from "./MiniDishCard";
import Axios from "axios";
const cardStyle = {
  display: "inline-block",
};

export default function Menu() {
  const [menuItems, setMenuItems] = useState([]);
  const [holder, setMenuHolder] = useState({});

  useEffect(() => {
    async function fectchData() {
      const menuItemsAPi = await Axios.get(`http://localhost:8080/api/menu/`);
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
    <div>
      {true && console.log(menuItems[0])}
      {menuItems.map((item) => {
        return (
          <>
            <h2> {item.type}</h2>
            {console.log("hi")}
            <MiniDishCard item={item} />
          </>
        );
      })}

      <h2>ENTREES</h2>

      <h2>DESSERT</h2>

      <h2>DRINKS</h2>
    </div>
  );
}
