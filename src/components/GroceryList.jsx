import { useState } from "react";
import Target from "./Target";
const GroceryList = () => {

    const list = [{
        name: "Mae Ploy Sweet Chili Sauce",
        price: 2.66,
        location: "A8",
        image: require('../images/Sweet_chili.png')
    }, {
        name: "Apples",
        price: 0.84,
        location: "B1",
        image: require('../images/applies.jpg')
    }, {
        name: "Cat Water Fountain",
        price: 19.98,
        location: "A26",
        image: require('../images/'),
        map: "",

    }]

    return (
        <div className="grocery-list">
            {list.map((target) => (
                <div className="target">
                    <Target target={target} />
                </div>
            ))}
        </div>
    );
}

export default GroceryList;