import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "../About/About";

export const Navigation = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/About" element={<About />} />
			</Routes>
		</BrowserRouter>
	);
};
