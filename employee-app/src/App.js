import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import EmployeeForm from "./components/employeeForm";
import EmployeeList from "./components/employeeList";

const App = () => {
  const [refreshFlag, setRefreshFlag] = useState(false);

  return (
    <div className="container mt-4">
      <h1 className="text-center">Employee Management</h1>
      <EmployeeForm refreshEmployees={() => setRefreshFlag(!refreshFlag)} />
      <EmployeeList refreshFlag={refreshFlag} />
    </div>
  );
};


export default App;
