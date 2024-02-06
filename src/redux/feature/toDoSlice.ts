import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type TToDo = {
  id: string;
  task: string;
  description: string;
  isCompleted?: boolean;
};

type TInitialState = {
  todos: TToDo[];
};

const initialState: TInitialState = { todos: [] };

const toDoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TToDo>) => {
      state.todos.push({ ...action.payload, isCompleted: false });
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((item) => item.id !== action.payload);
    },
    toggleComplete: (state, action: PayloadAction<string>) => {
      const task = state.todos.find((item) => item.id === action.payload);
      task!.isCompleted = !task?.isCompleted;
    },
  },
});

export const { removeTodo, addTodo, toggleComplete } = toDoSlice.actions;

export default toDoSlice.reducer;
