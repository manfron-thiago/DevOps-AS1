import React, { Component } from 'react';
import './Login.css';

// Componente de Login utilizando Class Component
class Login extends Component {
  // Construtor inicializa o estado do componente
  constructor(props) {
    super(props);
    this.state = {
      email: '',        // Armazena o valor do campo de e-mail
      password: '',     // Armazena o valor do campo de senha
      message: '',      // Armazena a mensagem de validação
      isSuccess: false, // Indica se o login foi bem-sucedido
    };
  }

  // Função para lidar com o login
  handleLogin = () => {
    const { email, password } = this.state;
    // Verifica se o e-mail e a senha são válidos
    if (email === 'eduardo.lino@pucpr.br' && password === '123456') {
      // Se as credenciais estiverem corretas
      this.setState({
        message: 'Acessado com sucesso!', // Mensagem de sucesso
        isSuccess: true,                 // Atualiza o estado de sucesso
      });
    } else {
      // Se as credenciais estiverem incorretas
      this.setState({
        message: 'Usuário ou senha incorretos!', // Mensagem de erro
        isSuccess: false,                      // Atualiza o estado de erro
      });
    }
  };

  // Método render() retorna o JSX para o componente
  render() {
    const { email, password, message, isSuccess } = this.state;

    return (
      <div className="login-container">
        <h1>Login</h1>

        {/* Campo de input para o e-mail */}
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => this.setState({ email: e.target.value })} // Atualiza o estado com o valor do campo
        />
        {/* Campo de input para a senha */}
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => this.setState({ password: e.target.value })} // Atualiza o estado com o valor do campo
        />
        {/* Botão para acionar a validação */}
        <button onClick={this.handleLogin}>Acessar</button>

        {/* Exibe a mensagem de validação, se existir */}
        {message && (
          <label className={`message ${isSuccess ? 'success' : 'error'}`}>
            {message}
          </label>
        )}
      </div>
    );
  }
}

export default Login;