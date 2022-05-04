import React from 'react'

import '../assets/book.css'
const Books = () => {
  return (
    <div className='book-container'>
      <div className='book-row1'>
        <span>Action</span>
        <h2>The Hunger Games</h2>
        <p>Suzanne collins</p>
        <button>Comments</button>
        <button>Remove</button>
        <button>Edit</button>
      </div>

      <div>
        <span>metric</span>
        <p>64%</p>
        <span>completed</span>
      </div>

      <div>
        <h4>CURRENT CHAPTERS</h4>
        <p>Chapter 17</p>
        <button className='update-progress'>UPDATED PROGRESS</button>
      </div>
    </div>
  )
}

export default Books