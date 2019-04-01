import React, { Component } from "react";
import Posts from "./components/Posts";
import AddPosts from "./components/AddPosts";
import "./App.css";

class App extends Component {
	render() {
		return (
			<div className="App">
				<AddPosts />
				<Posts />
			</div>
		);
	}
}

export default App;
