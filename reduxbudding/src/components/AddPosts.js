import React, { Component } from "react";

class AddPosts extends Component {
	state = {
		title: "",
		body: ""
	};
	handleChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	handleSubmit = e => {
		const post = {
			title: this.state.title,
			body: this.state.body
		};
		e.preventDefault();
		fetch("https://jsonplaceholder.typicode.com/posts", {
			method: "POST",
			headers: { "content-type": "application/json" },
			// the 'body' is the actual data we want to send
			body: JSON.stringify(post)
		})
			.then(res => res.json())
			.then(data => console.log(data));
	};

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<label>Title: </label>
					<div>
						<input
							type="text"
							name="title"
							value={this.state.title}
							onChange={this.handleChange}
						/>
					</div>
					<br />
					<div>
						<label>Body: </label>
						<textarea
							name="body"
							value={this.state.body}
							onChange={this.handleChange}
						/>
					</div>
					<br />
					<input type="submit" value="Submit" onClick={this.handleClick} />
				</form>
			</div>
		);
	}
}

export default AddPosts;
