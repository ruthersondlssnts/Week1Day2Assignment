import React from "react";
import data from "./data";

const Employees = () => {
    const { employees } = data;

    return (
        <>
            <h1>1 Employees</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Date of Birth</th>
                        <th>Salary</th>
                        <th>Designation</th>
                        <th>Image</th>
                        <th>Department</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((e, i) => {
                        return (
                            <tr
                                key={i}
                                onMouseEnter={() => {
                                    alert(
                                        ` Name: ${e.name} \n Age: ${e.age} \n Date Of Birth: ${e.dob} \n Salary: ${e.salary} \n Designation: ${e.designation} \n Department: ${e.department}`
                                    );
                                }}
                            >
                                <td>{e.name}</td>
                                <td>{e.age}</td>
                                <td>{e.dob}</td>
                                <td>{e.salary}</td>
                                <td>{e.designation}</td>
                                <td>
                                    <img src={e.image} width="50" height="50" alt="na" />{" "}
                                </td>
                                <td>{e.department}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </>
    );
};
export default Employees;
