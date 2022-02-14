import React from "react";
import LineStyle from "@mui/icons-material/LineStyle";

const Sidebar = () => {
	return (
		<div className="sidebar">
			<div className="sidebar__wrapper">
				<div className="sidebar__menu">
					<h3 className="sidebar__title">Dashboard</h3>
					<ul className="sidebar__list">
						<li className="listbar__item">
							<LineStyle />
							Home
						</li>
						<li className="listbar__item">
							<LineStyle />
							Overview
						</li>
						<li className="listbar__item">
							<LineStyle />
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
