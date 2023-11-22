import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom'

import RegisterPage from './routes/RegisterPage'
import LoginPage from './routes/LoginPage'
import PostPage from './routes/PostPage'
import BlogPage from './routes/BlogPage'
import PublicationPage from './routes/PublicationPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <BlogPage />
  },
  {
    path: '/login',
    element: <LoginPage />
  },
  {
    path: '/register',
    element: <RegisterPage />
  },
  {
    path: '/post',
    element: <PostPage />
  },
  {
    path: '/pub/:id',
    element: <PublicationPage />
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
