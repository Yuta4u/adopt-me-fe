import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./user";

const rootReducer = {
  users: usersReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
