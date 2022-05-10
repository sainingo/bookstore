import React from 'react';

import PropTypes from 'prop-types';

import '../assets/book.css';

const Books = (props) => {
  const { id, author, title } = props;
  return (
    <div className="book-container">
      <div key={id} className="book-row1">
        <span>Action</span>
        <h2>{title}</h2>
        <p>{author}</p>
        <button type="button">Comments</button>
        <button type="button">Remove</button>
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
};

export default Books;
