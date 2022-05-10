import React from 'react';
import { useSelector } from 'react-redux';
import Books from './Books';

const BookList = () => {
  const books = useSelector((state) => state.books);
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
