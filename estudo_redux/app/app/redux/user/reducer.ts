const initialState = {
  currentUser: null,
};

export const userReducer = (state = initialState, action: any) => {
  if (action.type == "user/login") {
    return { currentUser: 10 };
  }
  return state;
};
