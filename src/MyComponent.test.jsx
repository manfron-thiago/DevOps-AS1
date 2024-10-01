/* eslint-disable no-undef */

import { render, screen, fireEvent } from '@testing-library/react';
import MyComponent from './MyComponent';
import MyComponent from './MyComponent.jsx';


test('renders MyComponent without crashing', () => {
  render(<MyComponent />);
  expect(screen.getByTestId('my-component')).toBeInTheDocument();
});

test('displays the correct heading', () => {
  render(<MyComponent />);
  expect(screen.getByText(/expected heading/i)).toBeInTheDocument();
});

test('renders a button', () => {
  render(<MyComponent />);
  expect(screen.getByRole('button')).toBeInTheDocument();
});

test('calls function on button click', () => {
  const mockFunction = jest.fn();
  render(<MyComponent onClick={mockFunction} />);
  fireEvent.click(screen.getByRole('button'));
  expect(mockFunction).toHaveBeenCalled();
});

test('changes text when button is clicked', () => {
  render(<MyComponent />);
  fireEvent.click(screen.getByRole('button'));
  expect(screen.getByText(/new text/i)).toBeInTheDocument();
});
