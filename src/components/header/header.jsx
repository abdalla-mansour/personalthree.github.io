import React from 'react';
import './header.css';
import CTA from './CTA';
import ME from '../../assets/me.png';
import HeaderSocials from './headerSocials';

const header = () => {
    return (
        <div id="home">
            <div className='container header__container'>
                <h5>Hello I'm</h5>
                <h1>Abdalla Mansour</h1>
                <h5 className='text-light'>Fullstack Developer</h5>
                <CTA />
                <HeaderSocials />
                <div className='me'>
                    <img src={ME} alt="ME" />
                </div>
                <a href="#contact" className='scroll__down'>Scroll Down</a>
            </div>
        </div>
    )
}

export default header;