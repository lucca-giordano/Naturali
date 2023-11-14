import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const bookStyle = styled.div``

function Books() {

    const [books, setBooks] = useState([])

    useEffect(() => {
        const fetchAllBooks = async () => {
            try{
                const res = await axios.get('http://localhost:8800/books');
                setBooks(res.data);
                console.log(res);
            }catch(err){
                console.log(err);
            }

        }
        fetchAllBooks();
    }, []);

  return (
    <div>
        <bookStyle>
        <h1>--Book Shop--</h1>
        <div className="books">
            {books.map(book => (
                <div className="book" key={book.idbooks}>
                    {book.cover && <img src={book.cover} alt="" />}
                    <h2>{book.title}</h2>
                    <p>{book.desc}</p>
                    <span>{book.price}</span>
                    <button className='delete'>Delete</button>
                    <button className='update'>Update</button>
                </div>
            ))}
        </div>
        <button className="add"><Link to="/add">Add new Book</Link></button>
        </bookStyle>
    </div>
  )
}



export default Books