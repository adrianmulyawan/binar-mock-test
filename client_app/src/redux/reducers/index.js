import { combineReducers } from "redux";
import authReducer from "./auth/auth.reducer";
import profileReducer from "./profile/profile.reducer";
import todoReducer from "./todo/todo.reducer";

export default combineReducers({
  authReducer,
  profileReducer,
  todoReducer
});