import React from 'react';
import './services.css';
import { BsCheck2 } from 'react-icons/bs'

const Services = () => {
    return (
        <section id='services' >
            <h5>Что Я Могу Предложить</h5>
            <h2>Услуги</h2>
            <div className="conteiner services__conteiner">
                <article className='service' >
                    <div className="service__head">
                        <h3>
                            Верстка Адаптивного Лендинга
                        </h3>
                    </div>
                    <ul className="service__list">
                        <li>
                            <BsCheck2 className='service__list-icon' />
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
                        </li>
                        <li>
                            <BsCheck2 className='service__list-icon' />
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
                        </li>
                        <li>
                            <BsCheck2 className='service__list-icon' />
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
                        </li>
                        <li>
                            <BsCheck2 className='service__list-icon' />
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
                        </li>
                    </ul>
                </article>
                <article className='service' >
                    <div className="service__head">
                        <h3>
                            Анимированные сайты
                        </h3>
                    </div>
                    <ul className="service__list">
                        <li>
                            <BsCheck2 className='service__list-icon' />
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
                        </li>
                        <li>
                            <BsCheck2 className='service__list-icon' />
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
                        </li>
                        <li>
                            <BsCheck2 className='service__list-icon' />
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
                        </li>
                        <li>
                            <BsCheck2 className='service__list-icon' />
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
                        </li>
                        <li>
                            <BsCheck2 className='service__list-icon' />
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
                        </li>
                        <li>
                            <BsCheck2 className='service__list-icon' />
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
                        </li>
                        <li>
                            <BsCheck2 className='service__list-icon' />
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
                        </li>
                    </ul>
                </article>
                <article className='service' >
                    <div className="service__head">
                        <h3>
                            Web приложения
                        </h3>
                    </div>
                    <ul className="service__list">
                        <li>
                            <BsCheck2 className='service__list-icon' />
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
                        </li>
                        <li>
                            <BsCheck2 className='service__list-icon' />
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
                        </li>
                        <li>
                            <BsCheck2 className='service__list-icon' />
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
                        </li>
                        <li>
                            <BsCheck2 className='service__list-icon' />
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
                        </li>
                        <li>
                            <BsCheck2 className='service__list-icon' />
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
                        </li>
                        <li>
                            <BsCheck2 className='service__list-icon' />
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
                        </li>
                    </ul>
                </article>
            </div>
        </section>
    )
}

export default Services