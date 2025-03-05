import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { createEmployee } from "../services/employeeService";

const EmployeeForm = ({ refreshEmployees }) => {
  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    address: Yup.string().required("Required"),
    dept: Yup.string().required("Required"),
    manager: Yup.string().required("Required"),
  });

  return (
    <Formik
      initialValues={{ name: "", address: "", dept: "", manager: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        createEmployee(values).then(() => {
          refreshEmployees();
          resetForm();
        });
      }}
    >
      <Form className="p-4 border rounded">
        <div className="mb-3">
          <label className="form-label">Name</label>
          <Field name="name" className="form-control" />
          <ErrorMessage name="name" component="div" className="text-danger" />
        </div>
        <div className="mb-3">
          <label className="form-label">Address</label>
          <Field name="address" className="form-control" />
          <ErrorMessage name="address" component="div" className="text-danger" />
        </div>
        <div className="mb-3">
          <label className="form-label">Department</label>
          <Field name="dept" className="form-control" />
          <ErrorMessage name="dept" component="div" className="text-danger" />
        </div>
        <div className="mb-3">
          <label className="form-label">Manager</label>
          <Field name="manager" className="form-control" />
          <ErrorMessage name="manager" component="div" className="text-danger" />
        </div>
        <button type="submit" className="btn btn-primary">Add Employee</button>
      </Form>
    </Formik>
  );
};

export default EmployeeForm;
