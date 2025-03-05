import React, { useEffect, useState } from "react";
import { getEmployees, deleteEmployee } from "../services/employeeService";

const EmployeeList = ({ refreshFlag }) => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    getEmployees().then(response => setEmployees(response.data));
  }, [refreshFlag]);

  return (
    <div className="mt-4">
      <h3>Employee List</h3>
      <ul className="list-group">
        {employees.map(emp => (
          <li key={emp.id} className="list-group-item d-flex justify-content-between align-items-center">
            {emp.name} - {emp.dept}
            <button className="btn btn-danger btn-sm" onClick={() => deleteEmployee(emp.id).then(() => setEmployees(employees.filter(e => e.id !== emp.id)))}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeList;
