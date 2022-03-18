import React, { createContext, useEffect, useReducer } from "react";
import reducer from "./Reducer";

export const Context = createContext();

const Provider = ({ children }) => {
  const initialState = {
    users: null,
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  const { users } = state;
  console.log(users);

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("users"));
    dispatch({
      type: "USER_LOGIN",
      payload: users,
    });
  }, []);

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  return (
    <Context.Provider
      value={{
        users,
        dispatch,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Provider;
