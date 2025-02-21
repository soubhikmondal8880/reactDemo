import React, { useState } from 'react';
import './Navbar.css';
import logo from './../assets/logo.png';
import { Link } from 'react-scroll';
import contactImg from '../assets/contact.png';
import menu from '../assets/menu.png';

const Navbar = () => {
    const [showMenu, setshowMenu] = useState(false);
    
    return (
        <nav className="navbar">
            <img src={logo} className='logo'/>
            <div className="desktopMenu">
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">About</Link>
                <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Portfolio</Link>
                <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Clients</Link>
            </div>

            <button className="desktopMenuBtn" onClick={() => {
                document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
            }}>
                <img src={contactImg} alt="" className="desktopMenuImg" />
                Contact Me
            </button>

            <img src={menu} className='mobMenu' onClick={() => setshowMenu(!showMenu)} />
            
            <div className="navMenu" style={{ display: showMenu ? 'flex' : 'none' }}>
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={() => setshowMenu(false)}>Home</Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={() => setshowMenu(false)}>About</Link>
                <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={() => setshowMenu(false)}>Portfolio</Link>
                <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={() => setshowMenu(false)}>Clients</Link>
                <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={() => setshowMenu(false)}>Contact</Link>
            </div>
        </nav>
    );
};

export default Navbar;
