import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Cart from "./components/cart";
import PageNotFound from "./components/PageNotFound";
import Modal from "./components/Modal";

class App extends Component {
	render() {
		return (
			<React.Fragment>
				<Navbar />
				<Switch>
					<Route exact path="/" component={ProductList} />
					<Route exact path="/details" component={Details} />
					<Route exact path="/cart" component={Cart} />
					<Route component={PageNotFound} />
				</Switch>
				<Modal />
			</React.Fragment>
		);
	}
}

export default App;
