import { FETCH_POSTS, NEW_POST } from "./types";

// Each actn creator will be a func that we need to export
export function fetchPosts() {
	// The thunk middleware allows us to call the dispatch func directly
	// so that we can make asynchronous request
	return function(dispatch) {
		fetch("https://jsonplaceholder.typicode.com/posts")
			.then(res => res.json())

			.then(data =>
				dispatch({
					type: FETCH_POSTS,
					payload: posts
				})
			);
	};
}
