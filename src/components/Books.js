import React from 'react';

import PropTypes from 'prop-types';

import '../assets/book.css';

const Books = (props) => {
  const { id, author, title } = props;
  return (
    <li key={id}>
      <p>{title}</p>
      <p>{author}</p>
      <button type="button">Remove</button>
    </li>
  );
};

Books.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Books;
