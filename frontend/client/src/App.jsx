import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RegisterPage from './components/RegisterPage/RegisterPage'
import LoginPage from './components/LoginPage/LoginPage'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RegisterPage />
    </>
  )
}

export default App
