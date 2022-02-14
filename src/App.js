import React from "react";
import "./app.css";
import Sidebar from "./components/siderbar/Sidebar";
import Topbar from "./components/topbar/Topbar";

const App = () => {
	return (
		<>
			<Topbar />
			<div className="container">
				<Sidebar />
			</div>
		</>
	);
};

export default App;
