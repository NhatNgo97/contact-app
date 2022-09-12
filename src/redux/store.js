import { configureStore, combineReducers } from "@reduxjs/toolkit";
import themeSlice from "./themeSlice";
import contactSlice from "./contactSlice";

const rootReducer = combineReducers({
  contact: contactSlice.reducer,
  theme: themeSlice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
