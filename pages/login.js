import React from "react";
import Layout from "../components/Layout";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import TextField from "../components/TextField";

const validate = Yup.object({
  email: Yup.string().email("E-mail is invalid").required("E-mail is required"),
  password: Yup.string()
    .min(6, "Your password must be greater than 6 characters")
    .required("Password is required"),
});

const Login = () => {
  const handleSubmit = ({ email, password }) => {
    console.log(email, password);
  };

  return (
    <Layout>
      {false ? (
        <h2>You are already logged in</h2>
      ) : (
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={validate}
          onSubmit={handleSubmit}
        >
          {(formik) => (
            <div className="container p-5" style={{ width: "50%" }}>
              <Form>
                <TextField label="E-Mail" name="email" type="email" />
                <TextField label="Password" name="password" type="password" />
                <div className="d-grid gap-2">
                  <button
                    className="btn btn-outline-success mt-3"
                    type="submit"
                  >
                    LOGIN
                  </button>
                </div>
              </Form>
            </div>
          )}
        </Formik>
      )}
    </Layout>
  );
};

export default Login;
