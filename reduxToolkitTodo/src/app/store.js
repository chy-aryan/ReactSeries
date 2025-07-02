import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice'; // ✅ Fixed path

export const store = configureStore({
  reducer: {
    todos: todoReducer  // ✅ Named slice
  }
});
