import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Add() {

    const [book, setBook] = useState({
        name: "",
        desc: "",
        cover: "",
        price: null,
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setBook((prev)=>({...prev, [e.target.name]: e.target.value}));
    }

    const handleClick = async e=>{
        e.preventDefault();
        try {
            await axios.post('http://localhost:8800/books',book);
            navigate('/');
        } catch (err) {
            console.log(err);
            console.log("Client side error")
        }
    }
  return (
    <div className='form'>
        <h1>Add New Book</h1>
        <input type="text"  placeholder="name" onChange={handleChange} name="name" />
        <input type="text"  placeholder="description" onChange={handleChange} name="desc" />
        <input type="text"  placeholder="cover" onChange={handleChange} name="cover" />
        <input type="number"  placeholder="price" onChange={handleChange} name="price" />
        <button onClick={handleClick}>Add book</button>
    </div>
  )
}

export default Add