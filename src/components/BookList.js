import React from 'react';
import Books from './Books';

const BookList = () => {
  const books = [
    {
      id: 1,
      title: 'The pursuits of happiness',
      category: 'politics',
      author: 'Frank Kaso',
    },
    {
      id: 2,
      title: 'The pursuits of happiness',
      category: 'politics',
      author: 'Frank Kaso',
    },
    {
      id: 3,
      title: 'The pursuits of happiness',
      category: 'politics',
      author: 'Frank Kaso',
    },
    {
      id: 4,
      title: 'The pursuits of happiness',
      category: 'politics',
      author: 'Frank Kaso',
    },

  ];

  return (
    <ul>
      {books.map((book) => (
        <Books
          key={book.id}
          id={book.id}
          title={book.title}
          author={book.author}
        />
      ))}
    </ul>
  );
};

export default BookList;
