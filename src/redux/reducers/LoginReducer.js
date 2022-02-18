import { LOGIN_REQUEST } from "../actions/Types-1";
const initialState = {
  isLoggedIn: false,
  user: {
    email: "",
    password: "",
  },
};

export const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload,
      };
      break;
    default:
      return state;
  }
};
