/* eslint-disable no-undef */

import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import MyComponent from './MyComponent';

describe('MyComponent', () => {
    test('renders MyComponent without crashing', () => {
        render(<MyComponent onClick={() => {}} />);
        expect(screen.getByTestId('my-component')).toBeInTheDocument();
    });

    test('displays the correct heading', () => {
        render(<MyComponent onClick={() => {}} />);
        expect(screen.getByText(/Learn React/i)).toBeInTheDocument();
    });

    test('renders a button', () => {
        render(<MyComponent onClick={() => {}} />);
        expect(screen.getByRole('button')).toBeInTheDocument();
    });

    test('calls function on button click', () => {
        const mockFunction = jest.fn();
        render(<MyComponent onClick={mockFunction} />);
        fireEvent.click(screen.getByRole('button'));
        expect(mockFunction).toHaveBeenCalled();
    });

    test('changes text when button is clicked', () => {
        render(<MyComponent onClick={() => {}} />);
        fireEvent.click(screen.getByRole('button'));
        expect(screen.getByText(/Text updated/i)).toBeInTheDocument(); // Ajuste este texto conforme necessário
    });
});

