import React from 'react';
import { useDispatch } from 'react-redux';
import '../assets/Form.css';
import { registerNewBook } from '../redux/books/books';

const FormList = () => {
  const dispatch = useDispatch();

  const registerBook = (e) => {
    e.preventDefault();
    const { title, author, category } = e.target.elements;
    const newBook = {
      item_id: Math.floor((Math.random() * 100) + 1),
      title: title.value,
      author: author.value,
      category: category.value,
    };

    dispatch(registerNewBook(newBook));
    title.value = '';
    author.value = '';
    category.value = '';
  };

  return (
    <div className="add-form">
      <h2>ADD NEW BOOK</h2>
      <form onSubmit={registerBook}>
        <input className="title-input" id="title" type="text" placeholder="Book title" />
        <input className="author-input" id="author" placeholder="Author" />
        <input className="panel-bg" id="category" placeholder="Category" />
        <button type="submit" className="add-book-btn">ADD BOOK</button>
      </form>
    </div>
  );
};

export default FormList;
