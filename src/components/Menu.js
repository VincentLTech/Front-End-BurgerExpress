import React from "react";
import MiniDishCard from "./MiniDishCard";

export default function Menu(){
    return (
        <div>
            <h2 className="dish-type">APPETIZERS</h2>
                {/* Insert mapping here when db is complete, pass values to dish card */}
                
                <MiniDishCard />
                <MiniDishCard />

            <h2 className="dish-type">ENTREES</h2>

            <h2 className="dish-type">DESSERT</h2>

            <h2 className="dish-type">DRINKS</h2>

        </div>
    )
}
