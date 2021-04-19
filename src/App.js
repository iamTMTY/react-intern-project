import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Header from "./components/Header";
import BottomBar from "./components/BottomBar";
import Activity from "./components/pages/Activity";
import Wallet from "./components/pages/Wallet";
import Market from "./components/pages/Market";
import Earn from "./components/pages/Earn";

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Header />
				<Route exact path="/" render={(props) => <Home />} />
				<Route path="/activity" render={(props) => <Activity />} />
				<Route path="/wallet" render={(props) => <Wallet />} />
				<Route path="/market" render={(props) => <Market />} />
				<Route path="/earn" render={(props) => <Earn />} />
				<BottomBar />
			</div>
		</BrowserRouter>
	);
}

export default App;
