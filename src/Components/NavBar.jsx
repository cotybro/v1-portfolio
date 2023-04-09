import React from 'react'
import './NavBar.css'

function NavBar() {
  return (
    <header>
      <a href='/index.html'>
        <h2 className='header-title'>
          &#60;Coty<span className='red-accent'>Bro</span> &#47;&#62;
        </h2>
      </a>
      <div className='header-links'>
        <a href='#home' className='header-link'>
          Home
        </a>
        <a href='#projects' className='header-link'>
          Projects
        </a>
        <a href='#about' className='header-link'>
          About
        </a>
      </div>
    </header>
  )
}

export default NavBar
