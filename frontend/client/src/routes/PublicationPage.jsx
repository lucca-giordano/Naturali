import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

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
        </div>
    ); // mostra uma mensagem enquanto a postagem está sendo carregada


    return (
        <div>
        <h2 style={{color:"#000"}}>{post.title}</h2> {/* aqui você coloca o título */}
        <h3 style={{color:"#000"}}>{post.subtitle}</h3> {/* aqui você coloca o subtítulo */}
        <p style={{color:"#000"}}>{post.content}</p> {/* e aqui você coloca o conteúdo */}
      </div>
    )
}

export default PublicationPage