import React, { Component } from "react";

class Posts extends Component {
	// The will now come frm Redux
	// state = {
	// 	posts: []
	// };
	// componentWillMount() {
	// 	// The state of our app comes frm the fetched jsonplaceholder
	// 	fetch("https://jsonplaceholder.typicode.com/posts")
	// 		.then(res => res.json())

	// 		.then(data => this.setState({ posts: data }));
	// }
	render() {
		const postItem = this.state.posts.map(post => (
			<div key={post.id}>
				<h3>{post.title}</h3>
				<p>{post.body}</p>
			</div>
		));
		return <div>{postItem}</div>;
	}
}

export default Posts;
