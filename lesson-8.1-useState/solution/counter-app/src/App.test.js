import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import App from './App';

test('Renders without crashing', () => {
	const { getByText } = render(<App />);
	const appName = getByText('Counter App');
	expect(appName).toBeInTheDocument();
});

test('App loads with initial state of 0', () => {
	const { getByTestId } = render(<App />);
	expect(getByTestId('counter')).toHaveTextContent('0');
});

test('Increment button works', () => {
	const { getByTestId } = render(<App />);
	const counterValue = getByTestId('counter');
	const increment = getByTestId('incrementButton');
	fireEvent.click(increment);
	expect(counterValue).toHaveTextContent('1');
});
