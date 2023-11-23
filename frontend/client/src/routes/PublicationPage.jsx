import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

function PublicationPage() {

    const { id } = useParams(); // certifique-se de que "id" corresponde ao nome que você definiu na sua rota
    const [post, setPost] = useState(null); // cria um estado pra guardar a postagem
  
    useEffect(() => {
      fetch('http://localhost:3001/api/posts') // busca todas as postagens na API
        .then(response => response.json())
        .then(data => {
            const foundPost = data.find(p => p.idposts === Number(id));; // encontra a postagem com o ID certo
          setPost(foundPost); // atualiza o estado com a postagem encontrada
        })
        .catch(err => console.error(err));
    }, [id]); // o array [id] indica que esse useEffect vai rodar toda vez que o ID mudar
  
    if (!post) return (
        <div className="error-container">
            <h2 className="error-code" style={{color: "#50B96F"}}>Erro 404</h2>
            <p className="error-message">Postagem não encontrada</p>
            <Link to={'/'}><button className="error-page-voltar">Voltar</button></Link>
        </div>
    ); // mostra uma mensagem enquanto a postagem está sendo carregada


    return (
      <div className="publication-body">
        <Header/>
        <div className='publication-container'>
        <h2 className='publication-title' style={{color:"#000"}}>{post.title}</h2> {/* aqui você coloca o título */}
        <h3 className='publication-subtitle' style={{color:"#000"}}>{post.subtitle}</h3> {/* aqui você coloca o subtítulo */}
        <p className='publication-content' style={{color:"#000"}}>{post.content.split('\n').map((line, i) => (
          <React.Fragment key={i}>
            {line}<br />
          </React.Fragment>
        ))}</p> {/* e aqui você coloca o conteúdo */}
      </div>
      <Link to={'/'}><button className="publication-page-voltar">Voltar</button></Link>
      <Footer/>
      </div>

    )
}

export default PublicationPage