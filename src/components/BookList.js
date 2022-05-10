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
      title: 'Vampire Diaries',
      category: 'Horror',
      author: 'Nick KLaus',
    },
  ];

  return (
    <>
      {books.map((book) => (
        <Books
          key={book.id}
          id={book.id}
          title={book.title}
          category={book.category}
          author={book.author}
        />
      ))}
    </>
  );
};

export default BookList;
