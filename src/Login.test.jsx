import { render, screen, fireEvent } from '@testing-library/react';
import Login from './Login';

describe('Login Component', () => {
  test('renders Login component', () => {
    render(<Login />);
    expect(screen.getByPlaceholderText(/e-mail/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/senha/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /acessar/i })).toBeInTheDocument();
  });

  test('updates email and password on input change', () => {
    render(<Login />);
    
    const emailInput = screen.getByPlaceholderText(/e-mail/i);
    const passwordInput = screen.getByPlaceholderText(/senha/i);

    fireEvent.change(emailInput, { target: { value: 'eduardo.lino@pucpr.br' } });
    fireEvent.change(passwordInput, { target: { value: '123456' } });

    expect(emailInput.value).toBe('eduardo.lino@pucpr.br');
    expect(passwordInput.value).toBe('123456');
  });

  test('displays success message on correct login', () => {
    render(<Login />);
    
    fireEvent.change(screen.getByPlaceholderText(/e-mail/i), { target: { value: 'eduardo.lino@pucpr.br' } });
    fireEvent.change(screen.getByPlaceholderText(/senha/i), { target: { value: '123456' } });
    fireEvent.click(screen.getByRole('button', { name: /acessar/i }));

    expect(screen.getByText(/acessado com sucesso!/i)).toBeInTheDocument();
  });

  test('displays error message on incorrect login', () => {
    render(<Login />);
    
    fireEvent.change(screen.getByPlaceholderText(/e-mail/i), { target: { value: 'wrong.email@example.com' } });
    fireEvent.change(screen.getByPlaceholderText(/senha/i), { target: { value: 'wrongpassword' } });
    fireEvent.click(screen.getByRole('button', { name: /acessar/i }));

    expect(screen.getByText(/usuário ou senha incorretos!/i)).toBeInTheDocument();
  });

  test('calls handleLogin function on button click', () => {
    const handleLoginMock = jest.fn();
    render(<Login handleLogin={handleLoginMock} />);

    fireEvent.click(screen.getByRole('button', { name: /acessar/i }));
    expect(handleLoginMock).toHaveBeenCalled();
  });
});
