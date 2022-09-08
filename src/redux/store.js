import { configureStore, combineReducers } from "@reduxjs/toolkit";
import themeSlice from "./themeSlice";
import userSlice from "./userSlice";

const rootReducer = combineReducers({
  user: userSlice.reducer,
  theme: themeSlice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
