import React, { useEffect } from "react";

export default function Market({ page, pageHandler }) {
	useEffect(() => {
		if (page[3].id !== "active") {
			pageHandler(page[3].path);
		}
	}, []);

	return (
		<div className="content">
			<h1> Market </h1>
		</div>
	);
}
