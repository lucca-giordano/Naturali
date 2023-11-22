import React from 'react'
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div>
            <header className='navbar-header'>
                <div className="header-logo">
                    <img src="..\src\assets\img\logoSmall.png" alt="Logo Naturali" className="header-logo-img" />
                    <h1 className='header-logo-h1'>Naturali</h1>
                </div>
                <div className="header-itens">
                    <nav className="dropdown">
                        <div className="dropdown-title"><strong>Quem somos?</strong></div>
                        <div className="dropdown-list">
                            <Link className='dropdown-item'><strong>A causa </strong></Link>
                            <Link className='dropdown-item'><strong>Projetos</strong></Link>
                        </div>
                    </nav>
                    <nav className="dropdown">
                        <div className="dropdown-title"><strong>Como ajudar?</strong></div>
                        <div className="dropdown-list">
                            <Link className='dropdown-item'><strong>Doações</strong></Link>
                            <Link className='dropdown-item'><strong>Voluntariado</strong></Link>
                        </div>
                    </nav>
                    <div className="header-link">
                        <Link className='header-link-item'><strong>Contato</strong></Link>
                        <Link className='header-link-item'><strong>Blog</strong></Link>
                        <Link className='header-link-item' to={'/post'}><strong>Publicar</strong></Link>
                    </div>
                </div>


            </header>
        </div>
    )
}

export default Header