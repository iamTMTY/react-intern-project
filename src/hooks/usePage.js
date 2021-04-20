import { useState, useEffect } from "react";

export default function usePage(initialState) {
	const active = "active";
	const inActive = "inActive";
	const path = document.location.pathname;

	const [page, setPage] = useState(initialState);

	useEffect(() => {
		pageHandler(path);
	}, []);

	const pageHandler = (path) => {
		const newState = initialState.map((page) => {
			if (path === page.path) {
				return {
					path: page.path,
					id: active
				};
			} else {
				return {
					path: page.path,
					id: inActive
				};
			}
		});

		setPage(newState);
	};

	return [page, pageHandler];
}
