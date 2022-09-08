import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    name: "light",
    backgroundColor: "white",
    textColor: "black",
  },
  reducers: {},
});

export default themeSlice;
