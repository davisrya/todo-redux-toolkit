import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
	name: "todos",
	initialState: [],
	reducers: {
		addTodo: (state, action) => {
			state.push({
				id: Date.now(),
				text: action.payload,
				completed: false,
			});
		},
		toggleComplete: (state, action) => {
			const todo = state.find((todo) => todo.id === action.payload);
			if (todo) {
				todo.completed = !todo.completed;
			}
		},

		updateTodo: (state, action) => {
			const { id, text } = action.payload;
			const todo = state.find((todo) => todo.id === id);
			if (todo) {
				todo.text = text;
			}
		},
	},
});
export const { addTodo, toggleComplete, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;
