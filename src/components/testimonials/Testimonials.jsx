import React from 'react';
import './testimonials.css';
import AVTR1 from '../../assets/avatar1.jpg';
import AVTR2 from '../../assets/avatar2.jpg';
import AVTR3 from '../../assets/avatar3.jpg';
import AVTR4 from '../../assets/avatar4.jpg';

import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
    {
        avatar: AVTR1,
        name: "Ирина",
        review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab tempore nulla ratione magnam quibusdam ex non rem inventore, esse harum laboriosam fuga modi. Maxime accusamus itaque, accusantium distinctio voluptates aliquid?'
    },
    {
        avatar: AVTR2,
        name: "Виктор",
        review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab tempore nulla ratione magnam quibusdam ex non rem inventore, esse harum laboriosam fuga modi. Maxime accusamus itaque, accusantium distinctio voluptates aliquid?'
    },
    {
        avatar: AVTR3,
        name: "Игорь",
        review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab tempore nulla ratione magnam quibusdam ex non rem inventore, esse harum laboriosam fuga modi. Maxime accusamus itaque, accusantium distinctio voluptates aliquid?'
    },
    {
        avatar: AVTR4,
        name: "Светлана",
        review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab tempore nulla ratione magnam quibusdam ex non rem inventore, esse harum laboriosam fuga modi. Maxime accusamus itaque, accusantium distinctio voluptates aliquid?'
    },
]

const Testimonials = () => {
    return (
        <section id='testimonials' >
            <h5>Отзывы о моей работе</h5>
            <h2>Отзывы о сотрудничестве</h2>
            <Swiper className="conteiner testimonials__conteiner"
                // install Swiper modules
                modules={[Pagination]}
                spaceBetween={40}
                slidesPerView={1}
                pagination={{ clickable: true }}

            >
                {
                    data.map(({ avatar, name, review }, index) => {
                        return (
                            <SwiperSlide key={index} className='testimonials' >
                                <div className="client__avatar">
                                    <img src={avatar} alt="client avatar" />
                                </div>
                                <h5 className='client__name' >{name}</h5>
                                <small className='client__review' >
                                    {review}
                                </small>
                            </SwiperSlide>
                        )

                    })
                }

            </Swiper>

            {/* <article className='testimonials' >
                    <div className="client__avatar">
                        <img src={AVTR1} alt="client avatar" />
                    </div>
                    <h5 className='client__name' >Пенелопа Круз</h5>
                    <small className='client__review' >
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab tempore nulla ratione magnam quibusdam ex non rem inventore, esse harum laboriosam fuga modi. Maxime accusamus itaque, accusantium distinctio voluptates aliquid?
                    </small>
                </article>
                <article className='testimonials' >
                    <div className="client__avatar">
                        <img src={AVTR1} alt="client avatar" />
                    </div>
                    <h5 className='client__name' >Пенелопа Круз</h5>
                    <small className='client__review' >
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab tempore nulla ratione magnam quibusdam ex non rem inventore, esse harum laboriosam fuga modi. Maxime accusamus itaque, accusantium distinctio voluptates aliquid?
                    </small>
                </article>
                <article className='testimonials' >
                    <div className="client__avatar">
                        <img src={AVTR1} alt="client avatar" />
                    </div>
                    <h5 className='client__name' >Пенелопа Круз</h5>
                    <small className='client__review' >
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab tempore nulla ratione magnam quibusdam ex non rem inventore, esse harum laboriosam fuga modi. Maxime accusamus itaque, accusantium distinctio voluptates aliquid?
                    </small>
                </article>
                <article className='testimonials' >
                    <div className="client__avatar">
                        <img src={AVTR1} alt="client avatar" />
                    </div>
                    <h5 className='client__name' >Пенелопа Круз</h5>
                    <small className='client__review' >
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab tempore nulla ratione magnam quibusdam ex non rem inventore, esse harum laboriosam fuga modi. Maxime accusamus itaque, accusantium distinctio voluptates aliquid?
                    </small>
                </article> */}



        </section>
    )
}

export default Testimonials