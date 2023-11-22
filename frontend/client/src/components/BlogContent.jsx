import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';


function BlogContent() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/posts')
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      {posts.map(post => ( // pra cada postagem, cria um elemento
        <div key={post.id}>
          <h2 className='post-title-initial-page'>{post.title}</h2>
          <p className='post-subtitle-initial-page'>{post.subtitle}</p>
          <Link to={`/pub/${post.idposts}`}>Ver postagem</Link>
        </div>
      ))}
    </div>
  )
}

export default BlogContent