import React from 'react';
import './contact.css';
import { MdOutlineMarkEmailRead } from 'react-icons/md';
import { AiOutlineWhatsApp } from 'react-icons/ai';
import { MdWifiCalling1 } from 'react-icons/md'

const Contact = () => {
    return (
        <section id='contact' >
            <h5>До связи один Touch</h5>
            <h2>Мои Контакты</h2>
            <div className="conteiner contact__conteiner">
                <div className="contact__options">
                    <article className='contact__option' >
                        <MdOutlineMarkEmailRead className='contact__option-icon' />
                        <h4>Email</h4>
                        <h5>info@klykov.com</h5>
                        <a href="mailto:info@klykov.com" target='_blank' >Написать Письмо</a>
                    </article>

                    <article className='contact__option' >
                        <AiOutlineWhatsApp className='contact__option-icon' />
                        <h4>WhatsApp</h4>
                        <h5>+79186949800</h5>
                        <a href="https://api.whatsapp.com/send?phone=+79883884454" target='_blank' >Связаться в WhatsApp</a>
                    </article>

                    <article className='contact__option' >
                        <MdWifiCalling1 className='contact__option-icon' />
                        <h4>Позвонить</h4>
                        <h5>+7918-69-49-800</h5>
                        <a href="tel:+79186949800" target='_blank' >Позвонить</a>
                    </article>

                </div>


                <form action="">
                    <input type="text" name='name' placeholder='Ваше Имя' required />
                    <input type="email" name='email' placeholder='Ваш Email' required />
                    <textarea name="message" rows="7" placeholder='Ваше Сообщение' required ></textarea>
                    <button type='submit' className='btn btn-primary'  >Отправить Сообщение</button>
                </form>

            </div>

        </section>
    )
}

export default Contact