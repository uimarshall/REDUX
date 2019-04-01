// from Redux create store, so we get createStore frm Redux & store it
// Redux = redux library
// we do some destructuring
const {createStore} = Redux;
// the "state" params in d "reducer func" is the "state" of d "store"
// wen the reducer 1st interact wt d "store", it wont know the state of the store
// The state of the store wont exist se we create the initial state of d store
// wen d interaction 1st start, the reducer will pass d initState so created to d store as d initial state
// the "initState" is the initial state of the application
// create initial state of the application/store
const initState = {
	todos: [],
	posts: []
}
// when the reduder 1st fires it wont know the state of the store
// so it uses the initial state
// create reducer func
function myreducer(state=initState, action) {
	// inside the func block here is where we do d actual interaction wt the "store" to change the "state"
	// wen the reducer 1st fires, it passes the default state = initState to d store
	// console.log(action, state);
	if (action.type == 'ADD_TODO') {
		// whatever is returned here is the new state of the store
		return {
			...state,
			todos: [...state.todos, action.todo]
		}
	}
}
// we create d actual store frm the 'createStore func'
// the "store" is empty at creation
const store = createStore(myreducer);


// SUBSCRIPTION
// listen to changes in the store and react to it
store.subscribe(() => {
	console.log('state updated');
	console.log(store.getState());
})

// Components dispatches an action,which is the value of the 'action' params in the 'myreducer' func
// create the actn parameter
// the actn parameter is a js obj that hv a 'type' pty and that describes the actn, the value of the pty is the actn u want to fire
// "todo: 'buy milk'" - is the payload which is optional
const todoAction = {type: 'ADD_TODO', todo: 'buy milk'}
// so what were doing here is create an actn('todoAction') tobe passed to the 'action' param of the myreducer func
// so the reducer will take the 'action' passed and knows it going to  add todo(ADD_TODO) and that todo is the payload 'buy milk'

// next dispatch the 'action'
// wt this the myreducer func can run bc it now hv access to d todoAction
// When we enter REACT, we shall use a COMPONENT to dispatch the action
store.dispatch(todoAction)

// MODUS OPERANDI
// Say we want to edit data in the store, we dont go thru the store directly,
// 1st, we dispatch an action to the "reducer" func, the reducer looks at the action in d func block,
// and update or edit or change the state of the store based on the action.
// Remember the "reducer" has access to the "state" as one of its parameter, so dats is where we can update it.
