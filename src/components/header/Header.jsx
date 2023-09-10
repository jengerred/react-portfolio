import React from 'react';
import './header.css';
import CTA from './CTA';
import ME from '../../assets/Jenny.png';
import HeaderSocials from './HeaderSocials';


const Header = () => {
    return (
      <>
<header>

    <div className="container header__container">
    <div className="theme">  <a href="https://jengerred.github.io/Portfolio.github.io/"><button className="theme-button">Change Theme</button></a></div>
        <h5>Hello World!</h5>
        <h5> I am</h5>
        <h1>Jennifer Gerred</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA/>
        <HeaderSocials/>    
        
        <div className="me">
            <img src={ME} alt="me" />
        </div>
        <a href="#contact" className="scroll__down">Scroll Down</a>
    </div>
</header>
       </>
    )
}

export default Header;