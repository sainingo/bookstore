import React from 'react';

import '../assets/Form.css';

const FormList = () => {
  const registerBook = (e) => {
    e.preventDefault();
  };

  return (
    <div className="add-form">
      <h2>ADD NEW BOOK</h2>
      <form onSubmit={registerBook}>
        <input className="title-input" type="text" placeholder="Book title" />
        <input className="author-input" placeholder="Author" />
        <input className="panel-bg" placeholder="Category" />
        <button type="submit" className="add-book-btn">ADD BOOK</button>
      </form>
    </div>
  );
};

export default FormList;
