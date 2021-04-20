import React, { useEffect } from "react";

export default function Wallet({ page, pageHandler }) {
	useEffect(() => {
		if (page[2].id !== "active") {
			pageHandler(page[2].path);
		}
	}, []);

	return (
		<div className="content">
			<h1> Wallet </h1>
		</div>
	);
}
