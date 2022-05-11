import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBooks } from '../redux/books/books';
import Books from './Books';

const BookList = () => {
  const { books, loading } = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  let template = null;

  if (loading) {
    template = <h2> loading ....</h2>;
  } else {
    template = books.map((book) => (
      <Books
        key={book.item_id}
        id={book.item_id}
        title={book.title}
        category={book.category}
        author={book.author}
      />
    ));
  }
  return (
    <>
      {template}
    </>
  );
};

export default BookList;
