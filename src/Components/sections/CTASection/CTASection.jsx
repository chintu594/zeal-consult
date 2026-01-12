import React from 'react'
import './CTASection.css'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const CTASection = ({ title, body, btnUrl, btnText }) => {
    return (
        <section className="CTA-Sec" >
            <div className="container">
                <motion.div className="CTA" initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7, ease: 'easeOut' }}>
                    <h2>{title}</h2>
                    <p>{body}</p>
                    <Link to={btnUrl} className='btn'>{btnText}</Link>
                </motion.div>
            </div>
        </section >
    )
}

export default CTASection
