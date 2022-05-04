import React from 'react'

import '../assets/Form.css'

const FormList = () => {
  return (
    <div className='add-form'>
      <h2>ADD NEW BOOK</h2>
      <form>
        <input type='text' placeholder="Book title" />
        <span className='panel-bg'>Category</span>
        <button className='add-book-btn'>ADD BOOK</button>
      </form>
    </div>
  )
}

export default FormList