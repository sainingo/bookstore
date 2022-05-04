import React from 'react'

import '../assets/header.css';


const Header = () => {
  return (
    <header>
     <div className='header-ul'>
         <a href='#'>Bookstore CMS</a>
        <ul>
            <li>BOOKS</li>
            <li>CATEGORIES</li>
        </ul>
        </div>
        <span><i class="fa-solid fa-user"></i></span>
    </header>
  )
}

export default Header