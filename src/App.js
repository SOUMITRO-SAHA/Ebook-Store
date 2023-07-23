import React, { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAppContext } from "./Context/AppContext.Context";
import MainBody from "./components/Body/MainBody";
import Navbar from "./components/Navbar/Navbar.Component";

const App = () => {
	const { setIsMobile } = useAppContext();
	//choose the screen size
	const handleResize = () => {
		if (window.innerWidth < 1024) {
			setIsMobile(true);
		} else {
			setIsMobile(false);
		}
	};

	// create an event listener
	useEffect(() => {
		window.addEventListener("resize", handleResize);
	});
	return (
		<main>
			<Navbar />
			<MainBody />
			<ToastContainer />
		</main>
	);
};

export default App;
