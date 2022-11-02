import React from "react";
import GroceriesDisplay from "./GroceriesDisplay";

const Groceries = () => {
    let groceries = [
        { item: "ketchup", price: "500" },
        { item: "rice", price: "200" },
        { item: "milk", price: "45" }
    ];
    return <GroceriesDisplay groceries={groceries} />;
};

export default Groceries;
