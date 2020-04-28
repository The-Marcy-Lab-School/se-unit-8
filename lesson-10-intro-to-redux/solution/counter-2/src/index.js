/**
 * This sample application comes from the redux documentation examples.
 * https://redux.js.org/introduction/examples
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import Counter from './components/Counter';
import counterReducer from './reducers/counterReducer';

const store = createStore(counterReducer);
const rootEl = document.getElementById('root');

const render = () =>
	ReactDOM.render(
		<Counter
			value={store.getState()}
			onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
			onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
		/>,
		rootEl
	);

render();
store.subscribe(render);
