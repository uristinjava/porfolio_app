import React from 'react';
import './about.css';
import ME from '../../assets/me-about.jpg';
import { FiAward } from 'react-icons/fi';
import { AiOutlineUsergroupAdd } from 'react-icons/ai';
import { AiOutlineAudio } from 'react-icons/ai';



const About = () => {
    return (
        <section id='about' >

            <h5>Обо Мне</h5>
            <h2>Мой Опыт</h2>

            <div className="conteiner about__conteiner">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="about image" />
                    </div>
                </div>
                <div className="about__content">
                    <div className="about__cards">
                        <article className='about__card' >
                            <FiAward className='about__icon' />
                            <h5>Опыт</h5>
                            <small>20+коммерческих проектов</small>
                        </article>


                        <article className='about__card' >
                            <AiOutlineUsergroupAdd className='about__icon' />
                            <h5>Клиенты</h5>
                            <small>200+ Довольных Клиентов</small>
                        </article>


                        <article className='about__card' >
                            <AiOutlineAudio className='about__icon' />
                            <h5>Отзывы</h5>
                            <small>Все отзывы проверены</small>
                        </article>
                    </div>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas molestias corporis qui libero quo ratione consequatur hic. Minima, pariatur! Eos ipsum perferendis alias veniam voluptates dolorem incidunt praesentium dolore in.
                    </p>
                    <a href="contact" className='btn btn-primary' >Задать Вопросы</a>
                </div>

            </div>

        </section>
    )
}

export default About