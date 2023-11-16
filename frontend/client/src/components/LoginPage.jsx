import React, { useEffect } from 'react'
import '../assets/style.css'


const LoginPage =() => {

  useEffect(() => {
    // Mudar o título da página
    document.title = 'Naturali: Login';
  })

  return (

    <div className="login-container">
    <div className="left-section" >
      
    </div>
    <div className="right-section">
      <h2>Bem vindo de volta!</h2>
      <h3>Faça seu login.</h3>
      <form>
        <input type="text" id="fullName" name="fullName" placeholder="Nome Completo" required />
        <input type="password" id="password" name="password" placeholder="Senha" required />
        <br/>
        <div className="form-end">
          <button type="submit">Login</button>
          <p>Ainda não tem conta? <a href="/login">Faça uma aqui</a>!</p>
        </div>
      </form>
    </div>
  </div>
  )
}

export default LoginPage