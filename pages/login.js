import React, { useContext, useEffect } from "react";
import Layout from "../components/Layout";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import TextField from "../components/TextField";
import { useRouter } from "next/router";
import { Context } from "../context/Provider";
import { login } from "../context/apiCalls";
import dynamic from "next/dynamic";

const validate = Yup.object({
  email: Yup.string().email("E-mail is invalid").required("E-mail is required"),
  password: Yup.string()
    .min(6, "Your password must be greater than 6 characters")
    .required("Password is required"),
});

const Login = () => {
  const { users, dispatch } = useContext(Context);
  const router = useRouter();

  useEffect(() => {
    if (!!users) {
      router.push("/");
    }
  }, []);

  const handleSubmit = ({ email, password }) => {
    login(email, password, router, dispatch);
  };

  return (
    <Layout>
      {users ? (
        <h2>You are already logged in</h2>
      ) : (
        <Formik
          initialValues={{
            email: "user1@mail.com",
            password: "123123",
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

export default dynamic(() => Promise.resolve(Login), { ssr: false });
