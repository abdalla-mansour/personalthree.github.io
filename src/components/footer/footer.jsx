import React from 'react';
import './footer.css';
import { TbBrandFacebook } from 'react-icons/tb';
import { BsInstagram } from 'react-icons/bs';
import { FiTwitter } from 'react-icons/fi';

const footer = () => {
    return (
        <footer>
            <a href="#home" className='footer__logo'>Abdalla</a>
            <ul className='permalinks'>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <div className='footer__socials'>
                <a href="https://facebook.com"><TbBrandFacebook /></a>
                <a href="https://instagram.com"><BsInstagram /></a>
                <a href="https://twitter.com"><FiTwitter /></a>
            </div>
            <div className='footer__copyright'>
                <small>&copy; EGATOR Tutorials. All rights reserved</small>
            </div>
        </footer>
    )
}

export default footer;