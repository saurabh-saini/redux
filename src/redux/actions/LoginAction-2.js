import { LOGIN_REQUEST } from "./Types-1";

export const loginUser = (payload) => {
  return {
    type: LOGIN_REQUEST,
    payload: payload,
  };
};
