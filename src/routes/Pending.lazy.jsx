import { createLazyFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BsMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { addTodo } from "../../src/store/slice/todoSlice";
import "../index.css";

export const Route = createLazyFileRoute("/Pending")({
	component: Pending,
});

function Pending() {
	const [text, setText] = useState("");
	const [filter, setFilter] = useState("all"); //all
	const todos = useSelector((state) => state.todos);
	const dispatch = useDispatch();

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

	return (
		<>
			<div id="darkmode" className="flex justify-end mr-[50px] font-bold text-3xl">
				<div className="mr-[700px] font-poppins">
					<h1>TODO-LIST</h1>
				</div>
				<input type="checkbox" className="checkbox opacity-0 absolute" id="checkbox" />
				<label
					htmlFor="checkbox"
					className="label w-[49px] h-[24px] bg-black flex border m-2 rounded-2xl items-center justify-between p-1 relative cursor-pointer"
				>
					<BsMoonStarsFill color="white" />
					<BsFillSunFill color="yellow" />
					<div className="ball w-[22px] h-[22px] bg-white absolute top-0 left-0.5 border rounded-3xl"></div>
				</label>
			</div>
			<div>
				<div className="max-w-[485px] m-[15px_auto] bg-white rounded-[7px] p-[25px_0] shadow-2xl">
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
							<Link to="/">
								<span
									id="all"
									className="cursor-pointer mx-2 text-[17px] text-[#3c87ff]"
									onClick={() => setFilter("all")}
								>
									All({todos.length})
								</span>
							</Link>
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
						{pendingTodos.map((todo) => (
							<li
								key={todo.id}
								className="flex justify-between items-center p-2 border-b border-[#ccc]"
							>
								<div className="flex items-center gap-2">
									<span>{todo.text}</span>
								</div>
							</li>
						))}
					</ul>
				</div>
			</div>
		</>
	);
}

export default Pending;
