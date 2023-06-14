import React from 'react';
import './BookHighlightSection.css';

const BookHighlightSection = () => {
  const books = [
    {
      title: 'Livro 1',
      author: 'Jhon Doe',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imageUrl: 'https://covers.openlibrary.org/b/id/1-L.jpg',
    },
    {
      title: 'Livro 2',
      author: 'Gaspar Teixeira',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imageUrl: 'https://covers.openlibrary.org/b/id/2-L.jpg',
    },
    {
      title: 'Livro 10',
      author: 'Rosalia Melo',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imageUrl: 'https://covers.openlibrary.org/b/id/10-L.jpg',
    },
    {
      title: 'Livro 14',
      author: 'Rosalia Melo',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imageUrl: 'https://covers.openlibrary.org/b/id/14-L.jpg',
    },
    // Add more books as needed
  ];

  return (
    <div className="book-highlight-section">
      {books.map((book, index) => (
        <div className="book-card" key={index}>
          <img className="book-image" src={book.imageUrl} alt={book.title} />
          <div className="book-details">
            <h2 className="book-title">{book.title}</h2>
            <h3 className="book-author">{book.author}</h3>
            <p className="book-description">{book.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookHighlightSection;
