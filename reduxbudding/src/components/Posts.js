import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/postActions";
import PropTypes from "prop-types";

// The {fetchPosts} func is mapped to the props of our comp
class Posts extends Component {
	componentWillMount() {
		this.props.fetchPosts();
	}

	// When comp receive props from state in the store
	componentWillReceiveProps(nextProps) {
		if (nextProps.newPost) {
			this.props.posts.unshift(nextProps.newPost);
		}
	}
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
		const postItem = this.props.posts.map(post => (
			<div key={post.id}>
				<h3>{post.title}</h3>
				<p>{post.body}</p>
			</div>
		));
		return <div>{postItem}</div>;
	}
}

Posts.propTypes = {
	fetchPosts: PropTypes.func.isRequired,
	posts: PropTypes.array.isRequired,
	newPost: PropTypes.object.isRequired
};
// Map the state of store to the props(posts) of our comp
// In state.posts.items: the 'posts'comes frm the postReducer in rootReduder(index.js)
const mapStateToProps = state => ({
	posts: state.posts.items,
	newPost: state.posts.item
});

export default connect(
	mapStateToProps,
	{ fetchPosts }
)(Posts);
