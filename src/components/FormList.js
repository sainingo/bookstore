import React from 'react';

import '../assets/Form.css';

const FormList = () => (
  <div className="add-form">
    <h2>ADD NEW BOOK</h2>
    <form>
      <input className="title-input" type="text" placeholder="Book title" />
      <input className="author-input" placeholder="Author" />
      <input className="panel-bg" placeholder="Category" />
      <button type="button" className="add-book-btn">ADD BOOK</button>
    </form>
  </div>
);

export default FormList;
