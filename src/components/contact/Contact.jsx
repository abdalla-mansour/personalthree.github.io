import React from 'react';
import './Contact.css';
import { MdOutlineMailOutline } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
    return (
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>
            <div className='container contact__container'>
                <div className='contact__options'>
                    <article className='contact__option'>
                        <MdOutlineMailOutline className='contact__option-icon' />
                        <h4>Email</h4>
                        <h5>abdallamansour@gmail.com</h5>
                        <a href="mailto:abdallamansourabdelrhim@gmail.com" target="blank">Send a message</a>
                    </article>
                    <article className='contact__option'>
                        <RiMessengerLine className='contact__option-icon' />
                        <h4>Messenger</h4>
                        <h5>abdallamansour</h5>
                        <a href="https://www.facebook.com/profile.php?id=100078857436164" target="blank">Send a message</a>
                    </article>
                    <article className='contact__option'>
                        <FaWhatsapp className='contact__option-icon' />
                        <h4>Whatsapp</h4>
                        <h5>+0201068978663</h5>
                        <a href="https://api.whatsapp.com/send?phone=01068978663" target="blank">Send a message</a>
                    </article>
                </div>
                {/* END OF CONTACT OPTIONS */}
                <form action=''>
                    <input type="text" name='name' placeholder='Your Full Name' required />
                    <input type="email" name="email" placeholder='Your Email' required />
                    <textarea name="message" rows="7" placeholder='Your Message' required ></textarea>
                    <button type='submit' className='btn btn-primary'>Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact;