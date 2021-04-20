import React, { useEffect } from "react";

export default function Earn({ page, pageHandler }) {
	useEffect(() => {
		if (page[4].id !== "active") {
			pageHandler(page[4].path);
		}
	}, []);

	return (
		<div className="content">
			<h1> Earn </h1>
		</div>
	);
}
