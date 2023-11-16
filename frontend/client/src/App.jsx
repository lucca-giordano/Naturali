import { useState } from 'react'
import RegisterPage from './components/RegisterPage'
import LoginPage from './components/LoginPage'
import PostPage from './components/PostPage'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RegisterPage />
    </>
  )
}

export default App
