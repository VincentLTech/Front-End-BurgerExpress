import React from 'react';
import Axios from "axios";


export default function Cart(){


    return(
        <div id="cart-body">
            <h2 id="cart-h"> Your Order </h2>
            <h4 className="cart-h4">Items</h4>
            {/* Map order items here */}
            <div id="cart-list">
                <p id="item-name">• Cheese Burger</p>
                <p id="item-price">$12.50</p>
                <button id="item-remove">Remove</button>
            </div>
            <h4 className="cart-h4" id="cart-total-h">Total: </h4>
            <p id="cart-total">$12.50</p>

        </div>
    )
}