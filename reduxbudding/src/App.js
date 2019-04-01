import React, { Component } from "react";
import Posts from "./components/Posts";
import AddPosts from "./components/AddPosts";
import { Provider } from "react-redux";
import store from "./store";
// The Provider will provide our application with store
// While the 'connect' func will connect our comp to the store

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
