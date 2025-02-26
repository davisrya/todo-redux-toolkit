import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
//import App from "./App.jsx";
import { Provider } from "react-redux";
//import store from "./store/store";
import store1 from "./store/store1.js";
//import { BorderTrailCard } from "./animate/borderTrailCard";

const router = createRouter({ routeTree });

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<Provider store={store1}>
			<RouterProvider router={router} />
		</Provider>
		{/**<BorderTrailCard />*/}
	</StrictMode>,
);
