import { render, screen } from '@testing-library/react';
import MyComponent from './MyComponent';

test('renders MyComponent', () => {
  render(<MyComponent />);
  expect(screen.getByText(/MyComponent text/i)).toBeInTheDocument();
});
