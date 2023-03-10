import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  todos: any[];
}

const initialState: CounterState = {
  todos: [],
};

export const counterSlice = createSlice({
  name: "mycrypto",
  initialState,
  reducers: {
    completeTodo: (state, action: PayloadAction<string>) => {
      state.todos.map((todo) => (todo._id === action.payload ? (todo.completed = !todo.completed) : todo));
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((todo) => todo._id !== action.payload);
    },
    deleteAllTodos: (state) => {
      state.todos = [];
    },
  },
});

export const { completeTodo, deleteTodo, deleteAllTodos } = counterSlice.actions;
export default counterSlice.reducer;
