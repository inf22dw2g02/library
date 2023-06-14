import React, { useState } from 'react';
import './home.css';
import BookHighlightSection from './BookHighlightSection';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [bookData, setBookData] = useState({
    titulo: '',
    autorId: '',
    anoPublicacao: '',
  });

 

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookData({ ...bookData, [name]: value });
  };

  const createBook = () => {
    if (bookData.titulo === '' || bookData.autorId === '' || bookData.anoPublicacao === '') {
      alert('Please fill in all the fields');
      return;
}

    fetch("http://localhost:8080/livro", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bookData),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Book created successfully:', data);
        // Perform any additional actions after book creation

        // create an alert
        alert('Book created successfully');

        //  Clear the form inputs
      setBookData({
        titulo: '',
        autorId: '',
        anoPublicacao: '',
      });
      })
      .catch(error => {
        console.error('Error creating book:', error);
        // Handle error scenarios

        // Example: Show an error message
      alert('Error creating book. Please try again.');

      setBookData({
        titulo: '',
        autorId: '',
        anoPublicacao: '',
      });

      });
  };

  return (
    <div className="container">
      <h1 className="title">Welcome to the Home Page!</h1>
      <p className="description">You are logged in and can access the content of this page.</p>
      <h2>Destaques</h2>
      <BookHighlightSection />
      <h2 className='textoClique'>Clica no botao abaixo para aceder a Livros</h2>
      <Link to="/book" className="buttonL">Livros</Link>
      <h2 className='registarL'>Aqui voce pode registar o seu proprio Livro</h2>

      <input 
        type="text"
        name="titulo"
        placeholder="Title"
        value={bookData.titulo}
        onChange={handleInputChange}
        className="input-field"
      />
      <input
        type="text"
        name="autorId"
        placeholder="Author ID"
        value={bookData.autorId}
        onChange={handleInputChange}
        className="input-field"
      />
      <input
        type="text"
        name="anoPublicacao"
        placeholder="Year of Publication"
        value={bookData.anoPublicacao}
        onChange={handleInputChange}
        className="input-field"
      />

      <button onClick={createBook} className="create-button">Create Book</button>
    </div>
  );
};

export default HomePage;
