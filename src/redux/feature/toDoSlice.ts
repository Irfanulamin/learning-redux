import { createSlice } from "@reduxjs/toolkit";

const initialState = { todo: [] };

const toDoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {},
});

export default toDoSlice.reducer;
