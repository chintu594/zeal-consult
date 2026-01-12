import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../../images/logo.svg'
import './Footer.css'

const Footer = () => {
    const [email, setEmail] = useState('')
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false)
    const [error, setError] = useState('');

    const formSubmit = (e) => {
        e.preventDefault();

        setError('');
        setSubmitted(false);

        if (!email) {
            setError('Please fill your email id');
            return;
        }

        setLoading(true);

        setTimeout(() => {
            setLoading(false);
            setSubmitted(true);
            setEmail('');
        }, 3000);
    };

    return (
        <footer className="footer-sec">
            <div className="container">
                <div className="footer-row">
                    <div className="column column1">
                        <div className="logo">
                            <Link to="/">
                                <img src={Logo} alt="Footer logo" />
                            </Link>
                        </div>
                        <p>
                            Expert guidance tailored to your business needs, driving growth and innovation.
                        </p>
                        <div className="socials">
                            <h4>Subscribe Us</h4>
                            <ul>
                                <li>
                                    <a href="https://facebook.com" target="_blank" rel="noreferrer">
                                        <i className="ri-facebook-fill"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://twitter.com" target="_blank" rel="noreferrer">
                                        <i className="ri-twitter-x-line"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://instagram.com" target="_blank" rel="noreferrer">
                                        <i className="ri-instagram-line"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="column column2">
                        <div>
                            <h4>Useful links</h4>
                            <ul>
                                <li><Link to='/'>Home</Link></li>
                                <li><Link to='/about'>About</Link></li>
                                <li><Link to='/services'>Services</Link></li>
                                <li><Link to='/blogs'>Blogs</Link></li>
                                <li><Link to='/contact'>Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="column column3">
                        <h4>Subscribe for our newsletter</h4>
                        <form action="#" className="subs-form" onSubmit={formSubmit}>
                            <input type="email" placeholder='Your Email' className='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                            <button type='submit' className='submit btn'>{loading ? "Please, wait" : "Subscribe"}</button>
                            <p>{submitted ? 'Your Form has been submitted' : error}</p>
                        </form>
                        <div className="info">
                            <div className='address'>
                                <h4>Address</h4>
                                <p>1234 Innovation Drive Suite 567 Cityville, State 89012 Country</p>
                            </div>
                            <div className='email-phone'>
                                <div>
                                    <h4>Email</h4>
                                    <a href="mailto:info@zealconsult.com">info@zealconsult.com</a>
                                </div>
                                <div>
                                    <h4>Phone</h4>
                                    <a href="tel:+1(800)555-1234">+1 (800) 555-1234</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright">

                    <p>
                        © {new Date().getFullYear()} Chintu Mewara. Designed & Developed with React.
                    </p>

                </div>
            </div>
        </footer>
    )
}

export default Footer