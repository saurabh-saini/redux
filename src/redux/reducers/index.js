import { LoginReducer } from "./LoginReducer";

import { combineReducers } from "redux";

// Root reducer
export default combineReducers({
  login: LoginReducer,
});
