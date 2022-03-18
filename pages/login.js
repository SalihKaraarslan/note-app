import React, { useContext } from "react";
import Layout from "../components/Layout";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import TextField from "../components/TextField";
import axios from "axios";
import { useRouter } from "next/router";
import { Context } from "../context/Provider";

const validate = Yup.object({
  email: Yup.string().email("E-mail is invalid").required("E-mail is required"),
  password: Yup.string()
    .min(6, "Your password must be greater than 6 characters")
    .required("Password is required"),
});

const Login = () => {
  const { users, dispatch } = useContext(Context);
  const router = useRouter();

  const handleSubmit = async ({ email, password }) => {
    try {
      const { data } = await axios.post("/api/users/login", {
        email,
        password,
      });
      dispatch({ type: "USER_LOGIN", payload: data });

      router.push("/");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <Layout>
      {users ? (
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
