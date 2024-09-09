import React from 'react';
import ReactDOM from 'react-dom/client'; // Importa ReactDOM para renderizar o componente
import App from './App'; // Importa o componente App

// Obtém o elemento root onde o aplicativo será renderizado
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderiza o componente App dentro do elemento root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
