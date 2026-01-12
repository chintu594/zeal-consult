import React from 'react'
import './ContactInfo.css'
import { motion } from 'framer-motion'
const ContactInfo = () => {
    return (
        <section className="contactInfoSec">
            <div className="container">
                <div className="contactInfo">
                    <motion.div className='column' initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7, ease: 'easeOut' }}>
                        <i className="ri-map-pin-2-fill"></i>
                        <h4>Address</h4>
                        <p>1234 Innovation DriveSuite 567Cityville,State 89012Country</p>
                    </motion.div>
                    <motion.div className='column' initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}>
                        <i className="ri-mail-fill"></i>
                        <h4>Email</h4>
                        <a href="mailto:info@zealconsult.com">info@zealconsult.com</a>
                    </motion.div>
                    <motion.div className='column' initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7, ease: 'easeOut', delay: 0.4 }}>
                        <i className="ri-phone-fill"></i>
                        <h4>Phone</h4>
                        <a href="tel:+1 (800) 555-1234">+1 (800) 555-1234</a>
                    </motion.div>
                    <motion.div className='column' initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7, ease: 'easeOut', delay: 0.6 }}>
                        <i className="ri-time-fill"></i>
                        <h4>Opening hours</h4>
                        <p>Mon-Sat: 8 AM - 06 PM Sun: day off</p>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default ContactInfo
