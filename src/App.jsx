import { useEffect } from "react";
import "./index.css";
import { BsMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { handledarkMode } from "./store/actions/darkModeAction";

function App() {
	// assigning useDispatch hook of redux to a variable
	const dispatch = useDispatch();

	// calling our state from the reduxer using useSelector hook of redux
	const mode = useSelector((state) => state.darkMode);

	// destructuring isdarkMode state from mode variable called using useSelector hook of redux
	const { isdarkMode } = mode;

	// function to be fired on onChange method to switch the mode
	const switchDarkMode = () => {
		isdarkMode ? dispatch(handledarkMode(false)) : dispatch(handledarkMode(true));
	};
	useEffect(() => {
		//changing color of body with darkmode in useEffect
		document.body.style.backgroundColor = isdarkMode ? "#1a202c" : "#ebf8ff";
	}, [isdarkMode]);

	return (
		<>
			<div id="darkmode" className="flex justify-end mr-[50px] font-bold text-3xl  ">
				<div className="mr-[780px]">
					<h1>TODO-LIST</h1>
				</div>
				<input
					type="checkbox"
					className="checkbox opacity-0 absolute"
					id="checkbox"
					onChange={switchDarkMode}
					checked={isdarkMode}
				/>
				<label
					htmlFor="checkbox"
					className="label w-[49px] h-[24px] bg-black flex  border m-2 rounded-2xl items-center justify-between p-1 relative cursor-pointer "
				>
					<BsMoonStarsFill color="white" />
					<BsFillSunFill color="yellow" />
					<div className="ball w-[22px] h-[22px] bg-white absolute top-0 left-0.5 border rounded-3xl "></div>
				</label>
			</div>
			<div>
				<div className="max-w-[485px] m-[15px_auto] bg-white rounded-[7px] p-[25px_0] shadow-2xl">
					<div className="h-[52px] p-[0_25px] relative">
						{/**  <span className="absolute top-1/2 transform translate-x-[17px] -translate-y-1/2 material-symbols-outlined">
              list
              
            </span>*/}
						<input
							type="text"
							placeholder="Add a new task"
							className="h-full w-full text-[18px] rounded-[5px] border border-[#999] p-[0_10px_0_13px] placeholder:text-[#bfbfbf]"
						/>
					</div>
					<div className="flex justify-between items-center p-[18px_25px] border-b border-[#ccc]">
						<div className="flex">
							<span id="all" className="cursor-pointer mx-2 text-[17px] text-[#3c87ff]">
								All
							</span>
							<span id="pending" className="cursor-pointer mx-2 text-[17px]">
								Pending
							</span>
							<span id="completed" className="cursor-pointer mx-2 text-[17px]">
								Completed
							</span>
						</div>
						<button className="outline-none border-none text-white cursor-pointer text-[13px] rounded-[4px] p-[7px_13px] bg-[#3c87ff]">
							Add
						</button>
					</div>
					<ul className="m-[20px_25px]"></ul>
				</div>
			</div>
		</>
	);
}

export default App;
