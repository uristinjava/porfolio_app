import React, { useState } from 'react';
import './nav.css';
import { AiOutlineHome, AiOutlineUser, AiOutlineBook } from 'react-icons/ai';
import { BsHandThumbsUp } from 'react-icons/bs';
import { SlNotebook } from 'react-icons/sl';




const Nav = () => {
    const [activeNav, setActiveNav] = useState('#')
    return (
        <nav>
            <a
                onClick={() => setActiveNav('#')}
                href="#"
                className={activeNav === '#' ? 'active' : '#'}
            >
                <AiOutlineHome />
            </a>
            <a href='#about'
                onClick={() => setActiveNav('#about')}
                className={activeNav === '#about' ? 'active' : ''} > <AiOutlineUser /> </a>
            <a href="#experience"
                onClick={() => setActiveNav('#experience')}
                className={activeNav === '#experience' ? 'active' : ''}> <AiOutlineBook /> </a>
            <a href="#services"
                onClick={() => setActiveNav('#services')}
                className={activeNav === '#services' ? 'active' : ''}
            > <BsHandThumbsUp /> </a>
            <a href="#contact"
                onClick={() => setActiveNav("#contact")}
                className={activeNav === "#contact" ? 'active' : ''}> <SlNotebook /> </a>
        </nav>
    )
}

export default Nav