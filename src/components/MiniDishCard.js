import React from "react";

export default function MiniDishCard(){
    return (
        <div id="dish-card">
            <table>
                <tr>
                    <td id="dish-card-img-td">
                        <img src="https://d1nhio0ox7pgb.cloudfront.net/_img/g_collection_png/standard/256x256/hamburger.png" id="dish-card-img" />
                    </td>
                    <td>
                        <h4>Dish Name</h4>
                        <p>Description of the dish goes here. Should be a sentence or two.</p>
                        <div id="dish-bottom">
                            <p id="dish-p">$xx</p>
                            <button id="dish-add-btn">Add</button>
                        </div>
                    </td>
                </tr>
            </table>

        </div>
    )
}