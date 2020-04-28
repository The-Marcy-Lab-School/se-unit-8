/**
 * This sample application comes from the redux documentation examples.
 * https://redux.js.org/introduction/examples
 */
export default (state = 0, action) => {
	switch (action.type) {
		case 'INCREMENT':
			return state + 1;
		case 'DECREMENT':
			return state - 1;
		default:
			return state;
	}
};
