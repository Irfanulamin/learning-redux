import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type TToDo = {
  task: string;
  description: string;
  isCompleted?: boolean;
};

type TInitialState = {
  todos: TToDo[];
};

const initialState: TInitialState = { todos: [] };

const toDoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TToDo>) => {
      state.todos.push({ ...action.payload, isCompleted: false });
    },
  },
});

export const { addTodo } = toDoSlice.actions;

export default toDoSlice.reducer;
