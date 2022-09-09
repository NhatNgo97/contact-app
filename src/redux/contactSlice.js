import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import helper from "../helpers";
import contactService from "../services/contact";

const contactSlice = createSlice({
  name: "contact",
  initialState: {
    status: "idle",
    selectedContactId: null,
    contactList: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAsyncContact.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchAsyncContact.fulfilled, (state, action) => {
        state.status = "succeed";
        state.contactList = action.payload;
      })
      .addCase(fetchAsyncContact.rejected, (state, action) => {
        state.status = "failed";
      });
  },
});

export const fetchAsyncContact = createAsyncThunk("contact/fetch", async () => {
  try {
    const response = await contactService.fetchContact();
    return response.data;
  } catch (err) {
    throw err;
  }
});

export default contactSlice;