import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";

import "./App.css";

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div className="App">
					<h1>Project Manager</h1>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
