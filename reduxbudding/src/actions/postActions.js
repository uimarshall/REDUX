import { FETCH_POSTS, NEW_POST } from "./types";

// Each actn creator will be a func that we need to export
export function fetchPosts() {
	// The thunk middleware allows us to call the dispatch func directly
	// so that we can make asynchronous request.
	// We're fetching & dispatching to the 'reducer'
	return function(dispatch) {
		fetch("https://jsonplaceholder.typicode.com/posts")
			.then(res => res.json())
			// Take the data(posts) returned and dispatch it as 'payload'
			// The state of the store will be updated 'posts' actn dispatched
			.then(posts =>
				dispatch({
					type: FETCH_POSTS,
					payload: posts
				})
			);
	};
}
export const createPost = postData => dispatch => {
	fetch("https://jsonplaceholder.typicode.com/posts", {
		method: "POST",
		headers: { "content-type": "application/json" },
		// the 'body' is the actual data we want to send
		body: JSON.stringify(postData)
	})
		.then(res => res.json())

		.then(post =>
			dispatch({
				type: NEW_POST,
				payload: post
			})
		);
};
