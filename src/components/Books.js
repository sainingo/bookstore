import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

import '../assets/book.css';

const Books = (props) => {
  const {
    id, author, title, category,
  } = props;
  const dispatch = useDispatch();

  const deleteHandler = () => {
    dispatch(removeBook(id));
  };

  return (
    <div className="book-container">
      <div key={id} className="book-row1">
        <span>{category}</span>
        <h2>{title}</h2>
        <p>{author}</p>
        <button type="button">Comments</button>
        <button type="button" onClick={deleteHandler}>Remove</button>
        <button type="button">Edit</button>
      </div>

      <div>
        <span>metric</span>
        <p>64%</p>
        <span>completed</span>
      </div>

      <div>
        <h4>CURRENT CHAPTERS</h4>
        <p>Chapter 17</p>
        <button type="button" className="update-progress">UPDATED PROGRESS</button>
      </div>
    </div>
  );
};

Books.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Books;
