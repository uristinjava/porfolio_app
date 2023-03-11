import React from 'react';
import './experience.css';
import { BsPatchCheckFill } from 'react-icons/bs';
import { RiStarSFill, RiStarSLine } from 'react-icons/ri';


const Experience = () => {
    return (
        <section id='experience' >
            <h5>Что Я Могу</h5>
            <h2>Мой Опыт</h2>

            <div className="conteiner experience__conteiner">
                <div className="experience_frontend">
                    <h3>Frontend Develoment</h3>
                    <div className="experience__content">
                        <article className='experience__details' >
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>HTML</h4>
                                <small className='text-light' >Высокий Уровень</small>
                                <div>
                                    <RiStarSFill />
                                    <RiStarSFill />
                                    <RiStarSFill />
                                    <RiStarSFill />
                                </div>
                            </div>


                        </article>
                        <article className='experience__details' >
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>CSS</h4>
                                <small className='text-light' >Высокий Уровень</small>
                                <div>
                                    <RiStarSFill />
                                    <RiStarSFill />
                                    <RiStarSFill />
                                    <RiStarSFill />
                                    <RiStarSFill />
                                </div>
                            </div>
                        </article>
                        <article className='experience__details' >
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>JavaScript</h4>
                                <small className='text-light' >Уверенный Пользователь</small>
                                <div>
                                    <RiStarSFill />
                                    <RiStarSFill />
                                    <RiStarSFill />
                                    <RiStarSFill />
                                    <RiStarSLine />
                                </div>
                            </div>
                        </article>
                        <article className='experience__details' >
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>Адаптивная Разметка</h4>
                                <small className='text-light' >Высокий Уровень</small>
                                <div>
                                    <RiStarSFill />
                                    <RiStarSFill />
                                    <RiStarSFill />
                                    <RiStarSFill />
                                    <RiStarSFill />
                                </div>
                            </div>
                        </article>
                        <article className='experience__details' >
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>ReactJS</h4>
                                <small className='text-light' >Уверенный Пользователь</small>
                                <div>
                                    <RiStarSFill />
                                    <RiStarSFill />
                                    <RiStarSFill />
                                    <RiStarSFill />
                                    <RiStarSLine />
                                </div>
                            </div>
                        </article>
                    </div>
                </div>

                <div className="experience_backend">
                    <h3>Backend Develoment</h3>
                    <div className="experience__content">
                        <article className='experience__details' >
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>NodeJS</h4>
                                <small className='text-light' >Уверенный Пользователь</small>
                                <div>
                                    <RiStarSFill />
                                    <RiStarSFill />
                                    <RiStarSFill />
                                    <RiStarSFill />
                                    <RiStarSLine />
                                </div>
                            </div>
                        </article>
                        <article className='experience__details' >
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>PHP</h4>
                                <small className='text-light' >Средний Уровень</small>
                                <div>
                                    <RiStarSFill />
                                    <RiStarSFill />
                                    <RiStarSFill />
                                    <RiStarSLine />
                                    <RiStarSLine />
                                </div>
                            </div>
                        </article>
                        <article className='experience__details' >
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>My SQL</h4>
                                <small className='text-light' >Средний Уровень</small>
                                <div>
                                    <RiStarSFill />
                                    <RiStarSFill />
                                    <RiStarSFill />
                                    <RiStarSLine />
                                    <RiStarSLine />
                                </div>
                            </div>
                        </article>
                        {/* <article className='experience__details' >
                            <BsPatchCheckFill />
                            <h4>Адаптивная Разметка</h4>
                            <small className='text-light' >Высокий Отып</small>
                        </article>
                        <article className='experience__details' >
                            <BsPatchCheckFill />
                            <h4>ReactJS</h4>
                            <small className='text-light' >Высокий Отып</small>
                        </article> */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience