import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders sudoku title', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Sudoku/i);
  expect(linkElement).toBeInTheDocument();
});

test('has 81 boxes', () => {
  const { container } = render(<App />);
  const foo = container.querySelectorAll('td')
  console.log(foo)
  expect(foo).toHaveLength(81);
});