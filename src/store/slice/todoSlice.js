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
	},
});
export const { addTodo, toggleComplete } = todoSlice.actions;
export default todoSlice.reducer;
