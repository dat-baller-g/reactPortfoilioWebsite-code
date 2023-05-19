import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className='flex text-white mx-10 footer-container'>
        <div className='m-9 mt-28 ml-16 footer-mini-container'>
            <a className='text-left font-semibold text-lg footer-title text-black dark:text-white' href='#about'>Mobolaji</a>
            <p className='italic pt-4 footer-description text-black dark:text-white'>Elevate your brand with me</p>

        </div>
        <div className='m-28 ml-16 footer-mini-container'>
            <h3  className='text-left font-semibold text-lg footer-title text-black dark:text-white'>Navigation</h3>
            <div className='flex flex-row'>
                <a className='mr-6 uppercase text-sm pt-4 text-black dark:text-white' href='#about'>About</a>
                <a className='mr-6 uppercase text-sm pt-4 text-black dark:text-white' href='#skills'>Skills</a>
                <a className='mr-6 uppercase text-sm pt-4 text-black dark:text-white' href='#projects'>Projects</a>
                <a className='mr-6 uppercase text-sm pt-4 text-black dark:text-white' href='#contact'>Contact</a>
            </div>
            
        </div>
            <div className='m-28 ml-auto font-semibold w-64 footer-mini-container'>
            <h3 className='text-left text-lg footer-title text-black dark:text-white' >Get Connected</h3>
                <div className='footer-icons-container'>
                <FontAwesomeIcon icon={faLinkedin} className="font-icons pt-4 text-gray-500 dark:text-white" />
                <FontAwesomeIcon icon={faGithub} className="font-icons pt-4 text-gray-500 dark:text-white"/>
                <FontAwesomeIcon icon={faEnvelope} className="font-icons pt-4 text-gray-500 dark:text-white"/>
                <FontAwesomeIcon icon={faTwitter} className="font-icons pt-4 text-gray-500 dark:text-white" />
                </div>
                <p className='text-left font-normal text-black dark:text-white'>Copyright 2022. My Portfolio Site.</p>
            </div>
    </div>
  )
}

export default Footer