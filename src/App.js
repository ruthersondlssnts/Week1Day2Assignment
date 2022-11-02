import React from "react";
import Employees from "./Employees";
import Groceries from "./Groceries";
import Movies from "./Movies";

const App = () => {
    return (
        <>
            {/* 1 data.js */}
            <Employees />
            <hr />
            {/* 2 function based prop */}
            <Groceries />
            <hr />
            {/* 3 class based prop */}
            <Movies />
        </>
    );
};

export default App; 