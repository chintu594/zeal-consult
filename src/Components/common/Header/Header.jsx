import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../../../images/logo.svg'
import { useState, useEffect } from 'react'
import './Header.css'

const Header = () => {
    const [menuDisplay, setMenuDisplay] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`header ${scrolled ? "dark-header" : ""}`}>
            <div className="container">
                <nav className="navbar">
                    <div className="logo">
                        <Link to='/'><img src={Logo} alt="Header-logo" /></Link>
                    </div>
                    <div className={`menus ${menuDisplay ? "menus-show" : ""}`}>
                        <ul>
                            <li><NavLink to='/' onClick={() => setMenuDisplay(false)}>Home</NavLink></li>
                            <li><NavLink to='/about' onClick={() => setMenuDisplay(false)}>About</NavLink></li>
                            <li><NavLink to='/services' onClick={() => setMenuDisplay(false)}>Services</NavLink></li>
                            <li><NavLink to='/posts' onClick={() => setMenuDisplay(false)}>Posts</NavLink></li>
                            <li><NavLink to='/contact' onClick={() => setMenuDisplay(false)}>Contact</NavLink></li>
                        </ul>
                    </div>
                    <Link to="/contact" className='border-btn'>Get in Touch</Link>
                    <div className="toggle" onClick={() => setMenuDisplay(!menuDisplay)}>
                        <i className={`ri-menu-4-line ${menuDisplay ? "ri-close-fill" : ""}`}></i>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header