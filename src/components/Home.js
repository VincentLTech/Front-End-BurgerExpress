import React, { useEffect, useState } from "react";
import Axios from "axios";
import banImg from './images/burger-banner.jpeg';
import { Link } from "react-router-dom";

const btnStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -30%)",
  padding: "10px",
  textDecoration: "none",
  backgroundColor: "#3f0400",
  color: "bisque",
  fontSize: "1.5rem",
};

export default function Home() {
  //   const [menuItems, setMenuItems] = useState([]);

  //   useEffect(() => {
  //     async function fectchData() {
  //       const menuItemsAPi = await Axios.get(
  //         `http://localhost:8080/api/menuItem/`
  //       );
  //       console.log("this", menuItemsAPi);
  //       setMenuItems(menuItemsAPi.data);
  //     }
  //     fectchData();
  //   }, []);
  return (
    <div id="home-body">
        <div id="banner-div">
            <img src={banImg} id="banner-img" />
 
            <h1 id="banner-h"> BURGER EXPRESS </h1>
            
            <Link to="/Menu" >
                <button style={btnStyle}>Order Now</button>
            </Link>
        
        </div>

      <div id="press">
        <p id="pr-text">
          Our family business has served the community for decades striving to
          prepare and serve the best dishes in the neighborhood. With fresh
          ingredients, secret recipes, and excellent cooks, Burger Express has
          received many awards and great reviews from renowned critics.
        </p>
      </div>

      <div id="loc-div">
        <table id="loc-tbl">
          <tr>
            <td id="loc-img-td">
              <img
                src="https://www.creativefabrica.com/wp-content/uploads/2020/05/01/Fast-food-restaurant-building-vector-Graphics-4002365-1-1-580x386.jpg"
                id="loc-img"
              />
            </td>
            <td>
              <p>
                {" "}
                123 Main St.
                <br />
                Brooklyn, NY <br />
                11210 <br />
                (555) 123 - 4321
              </p>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}
