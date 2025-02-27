import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./slice/todoSlice";
import themeReducer from "./slice/themeSlice";

const store1 = configureStore({
	reducer: {
		todos: todoReducer,
		theme: themeReducer,
	},
});

export default store1;
