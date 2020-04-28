import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import Counter from './components/Counter';
import counter from './reducers';

const rootEl = document.getElementById('root');

const render = () => ReactDOM.render();

render();
store.subscribe(render);
