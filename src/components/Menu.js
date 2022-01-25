import React from "react";
import MiniDishCard from "./MiniDishCard";

const cardStyle = {
    display: "inline-block"
}

export default function Menu(){
    return (
        <div>
            <h2>APPETIZERS</h2>
                {/* Insert mapping here when db is complete, pass values to dish card */}
                <MiniDishCard />
                <MiniDishCard />

            <h2>ENTREES</h2>

            <h2>DESSERT</h2>

            <h2>DRINKS</h2>

        </div>
    )
}
