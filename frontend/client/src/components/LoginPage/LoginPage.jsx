import React from 'react'
import './LoginPage.css'

function LoginPage() {
  return (
    <div className="register-container">
    <div className="left-section">
      
    </div>
    <div className="right-section">
      <h2>Bem vindo de volta!</h2>
      <h3>Faça seu login.</h3>
      <form>
        <input type="text" id="fullName" name="fullName" placeholder="Nome Completo" required />
        <input type="password" id="password" name="password" placeholder="Senha" required />
        <br/>
        <button type="submit">Registrar</button>
      </form>
      <p>Ainda não tem conta? <a href="/login">Faça uma aqui</a>!</p>
    </div>
  </div>
  )
}

export default LoginPage