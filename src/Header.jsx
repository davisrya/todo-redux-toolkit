import { Link } from "@tanstack/react-router";

function Header() {
	return (
		<nav className="text-3xl font-bold  text-green-600 font-lobster ">
			<Link to={"/"}>
				<h1>TODO-REDUX-TOOLKIT</h1>
			</Link>
		</nav>
	);
}

export default Header;
