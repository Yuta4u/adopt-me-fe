import { configureStore } from "@reduxjs/toolkit"
import usersReducer from "./user"
import animalReducer from "./animal"
import historyReducer from "./history"

const rootReducer = {
  users: usersReducer,
  animal: animalReducer,
  history: historyReducer,
}

const store = configureStore({
  reducer: rootReducer,
})

export default store
