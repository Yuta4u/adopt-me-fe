import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./user";
import animalReducer from "./animal";
const rootReducer = {
  users: usersReducer,
  animal: animalReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
