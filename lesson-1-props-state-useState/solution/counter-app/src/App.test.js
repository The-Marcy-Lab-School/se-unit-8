import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import App from './App';
import CounterMessage from './CounterMessage';

test('The app renders without crashing', () => {
	const { getByText } = render(<App />);
	const appName = getByText('Counter App');
	expect(appName).toBeInTheDocument();
});

test('<App/> loads with initial state of 0', () => {
	const { getByTestId } = render(<App />);
	expect(getByTestId('counter')).toHaveTextContent('0');
});

test('Increment button increases counter by 1', () => {
	const { getByTestId } = render(<App />);
	const counterValue = getByTestId('counter');
	const increment = getByTestId('incrementButton');
	fireEvent.click(increment);
	expect(counterValue).toHaveTextContent('1');
});

test('Decrement button decreases counter by 1', () => {
	const { getByTestId } = render(<App />);
	const counterValue = getByTestId('counter');
	const decrement = getByTestId('decrementButton');
	fireEvent.click(decrement);
	expect(counterValue).toHaveTextContent('-1');
});

test('<CounterMessage/> loads with the value from prop received from <App/>', () => {
	const { getByTestId } = render(<CounterMessage count={0} />);
	expect(getByTestId('counter').textContent).toBe('0');
});
