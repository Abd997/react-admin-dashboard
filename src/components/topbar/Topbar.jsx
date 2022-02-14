import React from "react";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountCircle from "@mui/icons-material/AccountCircle";
import IconButton from "@mui/material/IconButton";
import "./Topbar.css";

const Topbar = () => {
	return (
		<div className="topbar">
			<div className="topbar__wrapper">
				<div className="left">
					<span className="dashboard__title">Dashboard</span>
				</div>
				<div className="right">
					<div className="topbar__iconscontainer">
						<NotificationsNoneIcon />
					</div>
					<div className="topbar__iconscontainer">
						<IconButton
							size="large"
							edge="end"
							aria-label="account of current user"
							aria-haspopup="true"
							color="inherit"
						>
							<AccountCircle />
						</IconButton>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Topbar;
