import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-social">
          <div className="social-icon-container">
            <a href="#" className='social-icon-link'>
              <img className='social-icon-img' src="..\src\assets\img\icons\github.svg" alt="GitHub" />
            </a>
          </div>
          <div className="social-icon-container">
            <a href="#" className='social-icon-link'>
              <img className='social-icon-img' src='..\src\assets\img\icons\instagram.svg' alt="Instagram" />
            </a>
          </div>
        </div>
        <div className="footer-content">
          <p>&copy; 2023 - Blog Naturali</p>
          <a href="#"><strong>A Causa</strong></a>
          <br/>
          <a href="#"><strong>Projetos</strong></a>
          <br/>
          <a href="#"><strong>Doações</strong></a>
          <br/>
          <a href="#"><strong>Voluntariado</strong></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
