import React from "react";

export default function MiniDishCard(props) {
  const item = { ...props.item };
  console.log(item);

  function handleClick() {
    //   post to cart(orders) here
    /*
      Axios.post("", {
          orderId: ,
          customerId: ,
          foodItemId: item.id
      }).then(res => console.log(res))
      .catch(err => {
          console.log(err)
      })
      
      setTimeout(()=> navigate(-1),500)
    */
    console.log("this is " + item.id)
  }


  return (
    <div id="dish-card">
      <table>
        <tr>
          <td id="dish-card-img-td">
            <img
              src={
                item.imageURL ||
                "https://d1nhio0ox7pgb.cloudfront.net/_img/g_collection_png/standard/256x256/hamburger.png"
              }
              id="dish-card-img"
              alt={item.name}
            />
          </td>
          <td>
            <h4> {item.name}</h4>
            <p>{item.description}</p>
            <div id="dish-bottom">
              <p id="dish-p">{item.price}</p>
              <button id="dish-add-btn" onClick={handleClick}>Add</button>
            </div>
          </td>
        </tr>
      </table>
    </div>
  );
}
