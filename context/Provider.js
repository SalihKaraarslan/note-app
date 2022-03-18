import React, { createContext, useReducer } from "react";
import reducer from "./Reducer";

export const Context = createContext();

const Provider = ({ children }) => {
  const initialState = {
    users: null,
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  const { users } = state;
  console.log(users);

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
