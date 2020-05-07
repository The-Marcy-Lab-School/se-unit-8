import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

import Counter from './components/Counter';
import counterReducer from './reducers/counterReducer';

const rootEl = document.getElementById('root');

const render = () => ReactDOM.render(<Counter />, rootEl);

render();
store.subscribe(render);
