import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function BottomBar() {
	const active = "active";
	const inActive = "inActive";
	const path = { name: document.location.pathname };
	// console.log(path);

	const initialState = [
		{
			path: "/",
			id: inActive
		},
		{
			path: "/activity",
			id: inActive
		},
		{
			path: "/wallet",
			id: inActive
		},
		{
			path: "/market",
			id: inActive
		},
		{
			path: "/earn",
			id: inActive
		}
	];
	const [page, setPage] = useState(initialState);

	useEffect(() => {
		pageHandler(path.name);
	}, []);

	const clickHandler = (e) => {
		// console.log(e.target);
		let path = e.target.pathname;
		if (e.target.tagName === "I") {
			path = e.target.parentElement.pathname;
		}

		pageHandler(path);
		// console.log(path);
	};

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

	// const getStyles = () => {

	// }

	return (
		<nav className="bottom-bar">
			<div>
				<Link to={`/`} onClick={clickHandler} id={page[0].id}>
					<i className="fas fa-home"></i>
					Home
				</Link>
			</div>
			<div>
				<Link to={`/activity`} onClick={clickHandler} id={page[1].id}>
					<i className="fas fa-list-alt"></i>
					Activity
				</Link>
			</div>
			<div>
				<Link to={`/wallet`} onClick={clickHandler} id={page[2].id}>
					<i className="fas fa-wallet"></i>
					Wallet
				</Link>
			</div>
			<div>
				<Link to={`/market`} onClick={clickHandler} id={page[3].id}>
					<i className="fas fa-store-alt"></i>
					Market
				</Link>
			</div>
			<div>
				<Link to={`/earn`} onClick={clickHandler} id={page[4].id}>
					<i className="fas fa-gift"></i>
					Earn
				</Link>
			</div>
		</nav>
	);
}
