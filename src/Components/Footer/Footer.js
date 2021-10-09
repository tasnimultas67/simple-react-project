import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer-container' >
            <div className='footer'>
                <div className='logo-section'>
                    <p><Link className='footer-logo' to='/home'>Tasvio.edu</Link> </p>
                    <p>We share knowledge with the world</p>
                </div>
                <div className='footer-links-container'>
                    <ul className='footer-links'>
                        <li><Link className='footer-link footer-link-tag' to='/home'>Home</Link></li>
                        <li><Link className='footer-link' to='/courses'>Courses</Link></li>
                        <li> <Link className='footer-link' to='/about'>About</Link></li>
                        <li><Link className='footer-link' to='/contact'>Contact</Link></li>
                    </ul>
                </div>
                <div className='get-in-touch-field'>
                    <p className='get-in-touch-title'>Get in touch</p>
                    <p>339 McDermott Points Hettingerhaven, NV 15283</p>
                    <p>Email: support@geeksui.com</p>
                    <p>Phone: <b>(000) 123 456 789</b></p>
                </div>
            </div>
            <p className='copyright'>© 2021 Tasvio.edu, Inc. All Rights Reserved</p>
    </div>
    );
};

export default Footer;