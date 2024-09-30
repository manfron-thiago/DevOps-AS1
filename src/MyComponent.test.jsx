/* eslint-disable no-undef */

import { render, screen } from '@testing-library/react';
import MyComponent from './MyComponent';
import '@testing-library/jest-dom';

test('renders learn react link', () => {
  render(<MyComponent />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});