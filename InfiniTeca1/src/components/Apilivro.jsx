import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BookSearch = ({ query }) => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [selectedBook, setSelectedBook] = useState(null);

  useEffect(() => {
    if (query) {
      handleSearch();
    }
  }, [query]);

  const handleSearch = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await axios.get('https://www.googleapis.com/books/v1/volumes', {
        params: {
          q: query,
          key: 'AIzaSyBxi0tqzLWnUObpkcY8GHQodlkBYKlEeyI' 
        }
      });
      setBooks(response.data.items || []);
    } catch (err) {
      setError('Erro ao buscar livros');
    } finally {
      setLoading(false);
    }
  };

  const handleBookClick = (book) => {
    setSelectedBook(book);
  };

  return (
    <div>
      {error && <p>{error}</p>}
      <div>
        {books.length > 0 ? (
          <ul>
            {books.map((book) => (
              <li key={book.id} onClick={() => handleBookClick(book)}>
                {book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail ? (
                  <img
                    src={book.volumeInfo.imageLinks.thumbnail}
                    alt={book.volumeInfo.title}
                    className="book-image"
                  />
                ) : (
                  <p>Imagem não disponível</p>
                )}
                <p>{book.volumeInfo.title} by {book.volumeInfo.authors?.join(', ')}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p></p>
        )}
      </div>
      
      {selectedBook && (
        <div className="book-description">
          <h2>{selectedBook.volumeInfo.title}</h2>
          <h3>Autores: {selectedBook.volumeInfo.authors?.join(', ')}</h3>
          <p><strong>Descrição:</strong> {selectedBook.volumeInfo.description || 'Descrição não disponível.'}</p>
          {selectedBook.volumeInfo.imageLinks && selectedBook.volumeInfo.imageLinks.thumbnail && (
            <img
              src={selectedBook.volumeInfo.imageLinks.thumbnail}
              alt={selectedBook.volumeInfo.title}
              className="book-image"
            />
          )}
        </div>
      )}
    </div>
  );
};

export default BookSearch;