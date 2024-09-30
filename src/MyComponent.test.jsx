/* global test, expect */

import React from 'react';
import { render, screen } from '@testing-library/react';
import MyComponent from './MyComponent'; // Ajuste o caminho conforme necessário

test('renders MyComponent correctly', () => {
  render(<MyComponent />);
  const element = screen.getByText(/Texto esperado/i); // Substitua pelo texto que você espera encontrar
  expect(element).toBeInTheDocument();
});
