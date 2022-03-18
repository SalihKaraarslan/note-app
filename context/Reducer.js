const reducer = (state, action) => {
  switch (action.type) {
    case "USER_LOGIN":
      return {
        ...state,
        users: action.payload,
      };
    case "USER_LOGOUT":
      return {
        ...state,
        users: null,
      };
    default:
      return state;
  }
};

export default reducer;
