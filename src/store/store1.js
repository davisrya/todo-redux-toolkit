import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./slice/todoSlice";

const store1 = configureStore({
	reducer: {
		todos: todoReducer,
	},
});

export default store1;
