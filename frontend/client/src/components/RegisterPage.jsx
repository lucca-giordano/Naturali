// RegisterPage.jsx
import React from 'react';
import { useEffect } from 'react';
import '../assets/style.css';

const RegisterPage = () => {

  useEffect(() => {
    // Mudar o título da página
    document.title = 'Naturali: Registre-se';
  })

  return (
      <div className="register-container">
        <div className="left-section" >
          
        </div>
        <div className="right-section">
          <h2>Prazer em te conhecer!</h2>
          <h3>Nos conte um pouco sobre você.</h3>
          <form >
            <input type="text" id="fullName" name="fullName" placeholder="Nome Completo" required />
            <input type="email" id="email" name="email" placeholder="Email" required />
            <input type="password" id="password" name="password" placeholder="Senha" required />
            <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Repita a Senha" required />
            <div className="form-end">
              <button type="submit">Registrar</button>
              <p>Já tem uma conta? <a href="/login">Faça login aqui</a>!</p>
            </div>
          </form>
        </div>
      </div>
  );
};

export default RegisterPage;