import React from 'react'
import { useEffect } from 'react'
import Header from '../components/Header.jsx'
import Home from '../components/StaticContent.jsx'
import Footer from '../components/Footer.jsx'
import BlogContent from '../components/BlogContent.jsx'


function BlogPage() {

  useEffect(() => {
    // Mudar o título da página
    document.title = 'Naturali';
  })

  return (
    <div className="blog-body">
    <div className='blog-container'>
      <div className="header-container">
        <Header /> 
      </div>
      <div className="content-container">
        <BlogContent />
        <Home />
      </div>
      <div className="footer-container-initial-page">
        <Footer />
      </div>
    </div>
    </div>
  )
}

export default BlogPage