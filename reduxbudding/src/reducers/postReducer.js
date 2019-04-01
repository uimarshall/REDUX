// This is where the post actions such as creating and sending post will be evaluated
import { FETCH_POSTS, NEW_POST } from "../actions/types";

const initState = {
	// 'items' array will rep the 'posts' that comes in frm our actn.
	items: [],
	// 'item' will rep the single 'post' that we had when we get the response back
	item: {}
};

export default function(state = initState, action) {
	switch (action.type) {
		case FETCH_POSTS:
			// update the state of the store
			return {
				// we return the initState,and 'items' override the the 'items' array in the state
				...state,
				items: action.payload
			};

		case NEW_POST:
			return {
				...state,
				item: action.payload
			};
		default:
			return state;
	}
}
