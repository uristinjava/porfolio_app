import React from 'react';
import './footer.css';
import { FaFacebookF } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import { AiFillGithub } from 'react-icons/ai'

const Footer = () => {
    return (
        <footer>
            <a href="#" className="footer__logo">KLYKOV</a>

            <ul className='permalinks' >
                <li><a href="#">Главная</a></li>
                <li><a href="#about">Обо Мне</a></li>
                <li><a href="#experience">Опыт</a></li>
                <li><a href="#services">Услуги</a></li>
                <li><a href="#portfolio">Портфолио</a></li>
                <li><a href="#testimonials">Отзывы</a></li>
                <li><a href="#contacts">Контакты</a></li>
            </ul>

            <div className="footer__socials">
                <a href="https://facebook.com" target='_blank'><FaFacebookF /></a>
                <a href="https://instagram.com" target='_blank'><FiInstagram />  </a>
                <a href="https://github.com" target='_blank'><AiFillGithub /></a>
            </div>

            <div className="footer__copyrights">
                <small>&copy; Все права защищены, 2023 год</small>
            </div>
        </footer>
    )
}

export default Footer