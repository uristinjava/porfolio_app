import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { GrDribbble } from 'react-icons/gr';
import { GrLinkedin } from 'react-icons/gr'




const HeaderSocials = () => {
    return (
        <div className='header__socials' >
            <a href="https://github.com" target='_blank' > <FaGithub /> </a>
            <a href="https://dribbble.com" target='_blank' > <GrDribbble /> </a>
            <a href="https://linkedin.com" target='_blank' > <GrLinkedin /> </a>
        </div>
    )
}

export default HeaderSocials