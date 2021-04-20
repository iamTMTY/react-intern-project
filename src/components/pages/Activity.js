import React, { useEffect } from "react";

export default function Activity({ page, pageHandler }) {
	useEffect(() => {
		if (page[1].id !== "active") {
			pageHandler(page[1].path);
		}
	}, []);

	return (
		<div className="content">
			<h1> Activity</h1>
		</div>
	);
}
