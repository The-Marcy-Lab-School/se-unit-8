import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders without crashing', () => {
	const { getByText } = render(<App />);
	const appName = getByText('Counter App');
	expect(appName).toBeInTheDocument();
});

test('App loads with initial state of 0', () => {
	// const { getByText } = render(<App />);
	// const initialState = getByText('0');
	// expect(initialState).toBeInTheDocument();
});
