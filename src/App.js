import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Header from "./components/Header";
import BottomBar from "./components/BottomBar";
import Activity from "./components/pages/Activity";
import Wallet from "./components/pages/Wallet";
import Market from "./components/pages/Market";
import Earn from "./components/pages/Earn";
import usePage from "./hooks/usePage";

function App() {
	// const active = "active";
	const inActive = "inActive";

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

	const [page, pageHandler] = usePage(initialState);

	return (
		<BrowserRouter>
			<div className="App">
				<Header />
				<Route exact path="/" render={(props) => <Home page={page} pageHandler={pageHandler} />} />
				<Route
					path="/activity"
					render={(props) => <Activity page={page} pageHandler={pageHandler} />}
				/>
				<Route
					path="/wallet"
					render={(props) => <Wallet page={page} pageHandler={pageHandler} />}
				/>
				<Route
					path="/market"
					render={(props) => <Market page={page} pageHandler={pageHandler} />}
				/>
				<Route path="/earn" render={(props) => <Earn page={page} pageHandler={pageHandler} />} />
				<BottomBar page={page} pageHandler={pageHandler} />
			</div>
		</BrowserRouter>
	);
}

export default App;
