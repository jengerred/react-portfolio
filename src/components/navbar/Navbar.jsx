import React from 'react';
import  {useState, useEffect} from 'react';
import {AiOutlineHome} from 'react-icons/ai';

import './navbar.css'

export default function Navbar() {

const [click, setClick] = useState(false);
const [button, setButton] = useState(true);

const closeMobileMenu = () => setClick(false);
const handleClick = () => setClick(!click);

const showButton = () => {
  if(window.innerWidth <= 960) {
    setButton(false);
  
  } else {
    setButton(true);
  }
};

useEffect(() => {
  showButton();
}, []);

window.addEventListener('resize', showButton);

  return (
    <>
  <nav className="navbar">
    <div className="navbar-container">
  
        <div className="menu-icon" onClick={handleClick}>
        <i className={click ? 'fa fa-times' : 'fa fa-bars'} ></i>
        </div>

        <AiOutlineHome className="navbar-logo"/>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
      
       <li className='nav-item'>
              <a 
                href='#' 
                className='nav-links'
                onClick={closeMobileMenu}>
               Home
              </a>
            </li>
        
            <li className='nav-item'>
              <a 
                href='#about' 
                className='nav-links'
                onClick={closeMobileMenu}>
                About
              </a>
            </li>

            <li className='nav-item'>
              <a
                href='#experience'
                className='nav-links' 
                onClick={closeMobileMenu}>
                Experience
              </a>
            </li>

            <li className='nav-item'>
              <a
                href='#servies' 
                className='nav-links' 
                onClick={closeMobileMenu}>
                  Services
              </a>
            </li>

            <li className='nav-item'>
              <a
                href='#portfolio' 
                className='nav-links' 
                onClick={closeMobileMenu}>
                  Projects
              </a>
            </li>

            <li className='nav-item'>
              <a
                href='#contact'
                className='nav-links'
                onClick={closeMobileMenu}>
                  contact
              </a>
            </li>

        

        </ul>
      

    </div>
  </nav>
</>
  )
}