const initialState = {
  currentUser: null,
};

export const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "user/login":
      return { currentUser: action.payload };
    case "user/logout":
      return { currentUser: null };
    default:
      return state;
  }
};
