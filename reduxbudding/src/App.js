import React, { Component } from "react";
import Posts from "./components/Posts";
import AddPosts from "./components/AddPosts";
import { Provider } from "react-redux";
import store from "./store";

import "./App.css";

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<div className="App">
					<AddPosts />
					<Posts />
				</div>
			</Provider>
		);
	}
}

export default App;
