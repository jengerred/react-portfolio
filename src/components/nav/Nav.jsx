import React from 'react';
import './nav.css';
import {AiOutlineHome} from 'react-icons/ai';
import {AiOutlineUser} from 'react-icons/ai';
import {BiBook} from 'react-icons/bi';
import {BiMessageDetail} from 'react-icons/bi';
import {VscChecklist} from 'react-icons/vsc';

import {TbCertificate} from 'react-icons/tb';
import {useState} from 'react';


const Nav = () => {
    const [activeNav, setActiveNav] = useState('#');

  
    return (
        <>
            <nav>
                <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''} onScroll={() => setActiveNav('#')}><AiOutlineHome/></a>
                <a href="#about"  onClick={() => setActiveNav('#about')} onScroll={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
                <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><TbCertificate/></a>
                <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><VscChecklist/></a>
                <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><BiBook/></a>
                <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageDetail/></a>
            </nav>
        </>
    )
}

export default Nav;