import React from 'react'
import { Link } from 'react-router-dom';

import '../assets/header.css';


const Header = () => {
  return (
    <header>
     <div className='header-ul'>
         <a className='logo' href='/'>Bookstore CMS</a>
        <ul>
            <li><Link to='/'>BOOKS</Link></li>
            <li><Link to='/category'>CATEGORIES</Link></li>
        </ul>
        </div>
        <span className='header-span'><i class="fa-solid fa-user"></i></span>
    </header>
  )
}

export default Header