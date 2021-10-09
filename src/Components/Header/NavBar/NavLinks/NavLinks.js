import React from 'react';
import { Link} from 'react-router-dom';
import '../NavLinks/NavLinks.css'
const NavLinks = () => {
    return (
        <div className='nav-bar'>
            <div className='logo-section'>
                <p><Link className='logo' to='/home'>Tasvio.edu</Link> </p>
            </div>
            <div className='nav-links'>
                <ul className='nav-links-ul'>
                    <li><Link className='nav-link' to='/home'>Home</Link></li>
                    <li><Link className='nav-link' to='/courses'>Courses</Link></li>
                    <li> <Link className='nav-link' to='/about'>About</Link></li>
                    <li><Link className='nav-link' to='/contact'>Contact</Link></li>
                </ul>
            </div>
        </div>


    );
};

export default NavLinks;