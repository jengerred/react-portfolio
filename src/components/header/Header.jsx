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
        <div className="theme"> 
            <a href="https://jengerred.github.io/Portfolio.github.io/">
                <button className="theme-button">Change Theme</button>
            </a>
        </div>
       
     <div className="header-content">
       

        <div className="hero-left">
            <div className="hero-text">
     
                <h1 className="hero-h1" > Jen's Portfolio</h1>
                <h5 className="text-light" style={{textAlign: "center", fontSize: "1.5rem"}}>Fullstack Developer</h5>
                <h5 style={{textAlign: "center"}}>Hello World!</h5>
                <HeaderSocials /> 
            </div>
      
        </div>

        <iframe className="video" width="500" height="250" src="https://www.youtube.com/embed/3ZkW-ESESyY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <a href="#contact" className="scroll__down">Scroll Down</a>
      
     
     

    </div>
    <CTA/>
    </div>
</header>
       </>
    )
}

export default Header;