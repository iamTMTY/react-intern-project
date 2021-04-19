import React from "react";

export default function Header() {
	return (
		<header className="app-header">
			<div className="app-header-content">
				<div className="col-1">
					<i className="fas fa-plus"></i>
					<div className="logo-text"> ribbon </div>
				</div>
				<div className="col-2">
					<i className="fas fa-user-circle"></i>
					<i className="fas fa-bell"></i>
				</div>
			</div>
		</header>
	);
}
