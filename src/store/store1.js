import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./slice/todoSlice";
import themeReducer from "./slice/themeSlice";

const store1 = configureStore({
	reducer: {
		todos: todoReducer,
		theme: themeReducer,
		// eslint-disable-next-line no-undef
		devTools: process.env.NODE_ENV !== 'production', // Enables Redux DevTools
	},
});

export default store1;
