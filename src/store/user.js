const default_state = {
  username: "",
  id: "",
};

export const userReducer = (state = default_state, action) => {
  if (action.type === "USER_LOGIN") {
    const dupState = { ...state };
    dupState.username = action.payload.username;
    dupState.id = action.payload.id;
    return dupState;
  }

  return state
};
