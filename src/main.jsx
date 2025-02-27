import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import { Provider } from "react-redux";
import store1 from "./store/store1.js";


const router = createRouter({ routeTree });

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<Provider store={store1}>
			<RouterProvider router={router} />
		</Provider>
	</StrictMode>,
);
