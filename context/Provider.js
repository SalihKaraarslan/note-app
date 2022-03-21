import React, { createContext, useEffect, useReducer } from "react";
import reducer from "./Reducer";

export const Context = createContext();

const Provider = ({ children }) => {
  const initialState = {
    users: null,
    deletedData: [],
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  const { users, deletedData } = state;
  console.log(users);

  useEffect(() => {
    const users = localStorage.getItem("users")
      ? JSON.parse(localStorage.getItem("users"))
      : null;
    const deletedData = localStorage.getItem("deletedData")
      ? JSON.parse(localStorage.getItem("deletedData"))
      : [];
    dispatch({
      type: "SET_DATA",
      payload: { users, deletedData },
    });
  }, []);

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("deletedData", JSON.stringify(deletedData));
  }, [users, deletedData]);

  return (
    <Context.Provider
      value={{
        users,
        deletedData,
        dispatch,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Provider;
