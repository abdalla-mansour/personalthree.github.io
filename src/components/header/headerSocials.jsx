import React from 'react';
import { FiLinkedin } from 'react-icons/fi';
import { FiGithub } from 'react-icons/fi';
import { FaDribbble } from 'react-icons/fa';

const headerSocials = () => {
    return (
        <div className='header__socials'>
            <a href="https://linkedin.com" target='blank'><FiLinkedin /></a>
            <a href="https://github.com" target='blank'><FiGithub /></a>
            <a href="https://dribbble.com" target='blank'><FaDribbble /></a>
        </div>
    )
}

export default headerSocials;