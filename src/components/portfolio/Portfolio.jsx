import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/portfolio1.jpg';
import IMG2 from '../../assets/portfolio2.jpg';
import IMG3 from '../../assets/portfolio3.jpg';
import IMG4 from '../../assets/portfolio4.jpg';
import IMG5 from '../../assets/portfolio5.png';
import IMG6 from '../../assets/portfolio6.jpg';

const data = [
    {
        id: 1,
        image: IMG1,
        title: 'Краткое описание проекта, что было реализовано',
        github: 'http://github.com',
        demoUrl: 'http://google.com'
    },
    {
        id: 6,
        image: IMG6,
        title: 'Краткое описание проекта, что было реализовано',
        github: 'http://github.com',
        demoUrl: 'http://google.com'
    },
    {
        id: 2,
        image: IMG2,
        title: 'Краткое описание проекта, что было реализовано',
        github: 'http://github.com',
        demoUrl: 'http://google.com'
    },
    {
        id: 3,
        image: IMG3,
        title: 'Краткое описание проекта, что было реализовано',
        github: 'http://github.com',
        demoUrl: 'http://google.com'
    },
    {
        id: 4,
        image: IMG4,
        title: 'Краткое описание проекта, что было реализовано',
        github: 'http://github.com',
        demoUrl: 'http://google.com'
    },
    {
        id: 5,
        image: IMG5,
        title: 'Краткое описание проекта, что было реализовано',
        github: 'http://github.com',
        demoUrl: 'http://google.com'
    },
]

const Portfolio = () => {
    return (
        <section id='portfolio' >
            <h5>Мои Проекты</h5>
            <h2>Портфолио</h2>
            <div className="conteiner portfolio__conteiner">
                {data.map(({ id, image, title, github, demoUrl }) => {
                    return (
                        <article key={id} className='portfolio__item' >
                            <div className="portfolio__item-img">
                                <img src={image} alt={title} />
                            </div>
                            <h3>{title}</h3>
                            <div className="portfolio__item-cta">
                                <a href={github} target='_blank' className="btn">GITHUB</a>
                                <a href={demoUrl} target='_blank' className="btn btn-primary">ССЫЛКА НА ПРОЕКТ</a>
                            </div>
                        </article>
                    )

                })}

                {/* <article className='portfolio__item' >
                    <div className="portfolio__item-img">
                        <img src={IMG6} alt="" />
                    </div>
                    <h3>Примеры работы</h3>
                    <div className="portfolio__item-cta">
                        <a href="http://github.com target='_blank " className="btn">GITHUB</a>
                        <a href="http://github.com target='_blank " className="btn btn-primary">ССЫЛКА НА ПРОЕКТ</a>
                    </div>
                </article>
                <article className='portfolio__item' >
                    <div className="portfolio__item-img">
                        <img src={IMG5} alt="" />
                    </div>
                    <h3>Примеры работы</h3>
                    <div className="portfolio__item-cta">
                        <a href="http://github.com target='_blank " className="btn">GITHUB</a>
                        <a href="http://github.com target='_blank " className="btn btn-primary">ССЫЛКА НА ПРОЕКТ</a>
                    </div>
                </article>
                <article className='portfolio__item' >
                    <div className="portfolio__item-img">
                        <img src={IMG1} alt="" />
                    </div>
                    <h3>Примеры работы</h3>
                    <div className="portfolio__item-cta">
                        <a href="http://github.com target='_blank " className="btn">GITHUB</a>
                        <a href="http://github.com target='_blank " className="btn btn-primary">ССЫЛКА НА ПРОЕКТ</a>
                    </div>
                </article>
                <article className='portfolio__item' >
                    <div className="portfolio__item-img">
                        <img src={IMG2} alt="" />
                    </div>
                    <h3>Примеры работы</h3>
                    <div className="portfolio__item-cta">
                        <a href="http://github.com target='_blank " className="btn">GITHUB</a>
                        <a href="http://github.com target='_blank " className="btn btn-primary">ССЫЛКА НА ПРОЕКТ</a>
                    </div>
                </article>
                <article className='portfolio__item' >
                    <div className="portfolio__item-img">
                        <img src={IMG3} alt="" />
                    </div>
                    <h3>Примеры работы</h3>
                    <div className="portfolio__item-cta">
                        <a href="http://github.com target='_blank " className="btn">GITHUB</a>
                        <a href="http://github.com target='_blank " className="btn btn-primary">ССЫЛКА НА ПРОЕКТ</a>
                    </div>
                </article>
                <article className='portfolio__item' >
                    <div className="portfolio__item-img">
                        <img src={IMG4} alt="" />
                    </div>
                    <h3>Примеры работы</h3>
                    <div className="portfolio__item-cta">
                        <a href="http://github.com target='_blank " className="btn">GITHUB</a>
                        <a href="http://github.com target='_blank " className="btn btn-primary">ССЫЛКА НА ПРОЕКТ</a>
                    </div>
                </article> */}
            </div>
        </section>
    )
}

export default Portfolio