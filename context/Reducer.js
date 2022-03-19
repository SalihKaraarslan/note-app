const reducer = (state, action) => {
  switch (action.type) {
    case "SET_DATA":
      return {
        ...state,
        users: action.payload.users,
        deletedData: action.payload.deletedData,
      };
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
    case "ADD_DELETED_DATA":
      return {
        ...state,
        deletedData: [action.payload, ...state.deletedData],
      };
    case "REMOVE_DELETED_DATA":
      return {
        ...state,
        deletedData: state.deletedData.filter(
          (data) => data.title !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default reducer;
