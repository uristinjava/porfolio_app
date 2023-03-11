import React from 'react';
import CTA from './CTA';
import './header.css';
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials';

const Header = () => {
    return (
        <header>
            <div className="conteiner header__conteiner">
                <h5>Привет!</h5>
                <h1>Я - Самый Крутов</h1>
                <h5 className="text-light">FullStack Developper</h5>
                <CTA />
                <HeaderSocials />
                <div className="me">
                    <img src={ME} alt="me" />
                </div>
                <a href="#contact" className='scroll__down'>Scroll Down</a>
            </div>
        </header>
    )
}

export default Header

