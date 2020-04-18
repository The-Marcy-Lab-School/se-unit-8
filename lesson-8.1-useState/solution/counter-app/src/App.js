import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function App() {
	let [count, setCount] = useState(0);

	/** TODO: find other syntax or add comments;
	 * Look into refactoring to use callback function
	 * */
	const decrement = () => setCount((count -= 1));
	const increment = () => setCount((count += 1));

	return (
		<div className="App">
			<h1>Counter App</h1>
			<p>{count}</p>
			<button onClick={decrement}>-</button>
			<button onClick={increment}>+</button>
		</div>
	);
}

export default App;

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
