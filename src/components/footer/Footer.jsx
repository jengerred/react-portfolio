import React from 'react';
import './footer.css';
import {BsLinkedin} from "react-icons/bs";
import {FaGithub} from "react-icons/fa";


const Footer = () => {
    return (
        <>
        <div className="border">
<footer>
    <a href="#" className="footer__logo">Jen's Portfolio</a>

    <ul className="permalinks">
        <li><a href="#" >Home</a></li>
        <li><a href="#about" >About</a></li>
        <li><a href="#experience" >Experience</a></li>
        <li><a href="#services" >Services</a></li>
        <li><a href="#portfolio" >Projects</a></li>
        <li><a href="#contact" >Contact</a></li>
    </ul>

    <div className="footer__socials">
        <a href="https://www.linkedin.com/in/jennifergerred/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/jengerred" target="_blank"><FaGithub/></a>
    </div>

    <div className="footer__copyright">
        <small> copyright &copy; Jennifer Gerred 2023. All right reserved.</small>
    </div>

 </footer>
 </div>
        </>
    )
}

export default Footer;