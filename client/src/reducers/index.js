import { combineReducers } from "redux";
import users from "./users";
import page from "./page";
import profile from "./profile";
import searchUser from "./search";

const reducers = combineReducers({
  users,
  page,
  profile,
  searchUser
});

export default reducers;
