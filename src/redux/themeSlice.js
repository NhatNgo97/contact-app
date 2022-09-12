import { createSlice } from "@reduxjs/toolkit";
import helper from "../helpers";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    name: "light",
    style: helper.theme.light,
  },
  reducers: {
    changeTheme(state, action) {
      if (state.name === "light") {
        state.style = helper.theme.dark;
        state.name = "dark";
      } else {
        state.style = helper.theme.light;
        state.name = "light";
      }
    },
  },
});

export default themeSlice;
