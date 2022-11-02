import React from "react";

const GroceriesDisplay = ({ groceries }) => {
    return (
        <>
            <h1>2 Groceries</h1>
            <table>
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {groceries.map((g, i) => {
                        return (
                            <tr key={i}>
                                <td>{g.item}</td>
                                <td>{g.price}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </>
    );
};

export default GroceriesDisplay;
