import React from 'react';

import '../assets/book.css';

const Books = () => (
  <div className="book-container">
    <div className="book-row1">
      <span>Action</span>
      <h2>The Hunger Games</h2>
      <p>Suzanne collins</p>
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

export default Books;
