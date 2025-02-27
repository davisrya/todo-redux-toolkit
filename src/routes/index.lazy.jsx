import { createLazyFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BsMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { addTodo, toggleComplete, updateTodo } from "../../src/store/slice/todoSlice";
import { toggleTheme } from "../store/slice/themeSlice";
import "../index.css";

export const Route = createLazyFileRoute("/")({
	component: Index,
});

function Index() {
	const [text, setText] = useState("");
	const [filter, setFilter] = useState("all"); //all
	const todos = useSelector((state) => state.todos);
	const isDarkMode = useSelector((state) => state.theme.isDarkMode);
	const dispatch = useDispatch();

	useEffect(() => {
		document.body.style.backgroundColor = isDarkMode ? "#1a202c" : "#ebf8ff";
	}, [isDarkMode]);

	//separate in different array
	const completedTodos = todos.filter((todo) => todo.completed);
	const pendingTodos = todos.filter((todo) => !todo.completed);

	const handleInputChange = (e) => {
		setText(e.target.value);
	};

	function getFilterTodos() {
		if (filter === "completed") {
			return completedTodos;
		} else if (filter === "pending") {
			return pendingTodos;
		} else {
			todos;
		}
	}

	// eslint-disable-next-line no-unused-vars
	const displayedTodos = getFilterTodos();

	const handleAddTodo = () => {
		if (text) {
			dispatch(addTodo(text));
			setText("");
		}
	};

	const handleToggleComplete = (id) => {
		dispatch(toggleComplete(id));
	};

	const [editingId, setEditingId] = useState(null);
	const [editText, setEditText] = useState("");

	const handleEditClick = (id, text) => {
		setEditingId(id);
		setEditText(text);
	};

	const handleUpdateTodo = (id) => {
		if (editText.trim()) {
			dispatch(updateTodo({ id, text: editText }));
			setEditingId(null);
		}
	};

	return (
		<>
			<div id="darkmode" className="flex justify-end mr-[50px] font-bold text-3xl">
				<div className={`mr-[700px] font-poppins  ${
						isDarkMode ? "text-white" : "text-black"
					}`}>
					<h1>TODO-LIST</h1>
				</div>
				<input
					type="checkbox"
					checked={isDarkMode}
					onChange={() => dispatch(toggleTheme())}
					className="checkbox opacity-0 absolute"
					id="checkbox"
				/>
				<label
					htmlFor="checkbox"
					className={`label w-[49px] h-[24px] flex border m-2 rounded-2xl items-center justify-between p-1 relative cursor-pointer ${
						isDarkMode ? "bg-gray-800" : "bg-black"
					}`}
				>
					<BsMoonStarsFill color="white" />
					<BsFillSunFill color="yellow" />
					<div className="ball w-[22px] h-[22px] bg-white absolute top-0 border rounded-3xl left-0.5 "></div>
				</label>
			</div>
			<div>
				<div
					className={`max-w-[485px] m-[15px_auto] rounded-[7px] p-[25px_0] shadow-2xl ${
						isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"
					}`}
				>
					<div className="h-[52px] p-[0_25px] relative">
						<input
							type="text"
							value={text}
							onChange={handleInputChange}
							placeholder="Add a new task"
							className="h-full w-full text-[18px] rounded-[5px] border border-[#999] p-[0_10px_0_13px] placeholder:text-[#bfbfbf]"
						/>
					</div>
					<div className="flex justify-between items-center p-[18px_25px] border-b border-[#ccc]">
						<div className="flex">
							<span
								id="all"
								className="cursor-pointer mx-2 text-[17px] text-[#3c87ff]"
								onClick={() => setFilter("all")}
							>
								All({todos.length})
							</span>
							<Link to="/Pending">
								<span
									id="pending"
									className="cursor-pointer mx-2 text-[17px]"
									onClick={() => setFilter("pending")}
								>
									Pending({pendingTodos.length})
								</span>
							</Link>
							<Link to="/Complete">
								<span
									id="completed"
									className="cursor-pointer mx-2 text-[17px]"
									onClick={() => setFilter("completed")}
								>
									Completed({completedTodos.length})
								</span>
							</Link>
						</div>
						<button
							onClick={handleAddTodo}
							className="outline-none border-none text-white cursor-pointer text-[13px] rounded-[4px] p-[7px_13px] bg-[#3c87ff]"
						>
							Add
						</button>
					</div>
					<ul className="m-[20px_25px]">
						{todos.map((todo) => (
							<li
								key={todo.id}
								className="flex justify-between items-center p-2 border-b border-[#ccc]"
							>
								<div className="flex items-center gap-2">
									{todo.completed && <span className="text-green-500">✅</span>}
									{editingId === todo.id ? (
										<input
											type="text"
											value={editText}
											onChange={(e) => setEditText(e.target.value)}
											className="px-2 m-2"
										/>
									) : (
										<span>{todo.text}</span>
									)}
								</div>
								<div className="flex gap-2">
									<button
										onClick={() => handleToggleComplete(todo.id)}
										className="outline-none border-none text-white cursor-pointer text-[13px] rounded-[4px] p-[7px_13px] bg-[#3c87ff]"
									>
										{todo.completed ? "Mark Incomplete" : "Mark Complete"}
									</button>
									{editingId === todo.id ? (
										<button
											onClick={() => handleUpdateTodo(todo.id)}
											className="text-blue-500"
										>
											Save
										</button>
									) : (
										<span
											className="material-symbols-outlined cursor-pointer"
											onClick={() => handleEditClick(todo.id, todo.text)}
										>
											edit
										</span>
									)}
								</div>
							</li>
						))}
					</ul>
				</div>
			</div>
		</>
	);
}

export default Index;
