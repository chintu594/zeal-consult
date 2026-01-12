import React from 'react'
import AdviceImg from '../../../images/advice.avif'
import './FullWidthSec.css'
import { motion } from 'framer-motion'
const FullWidthSec = () => {
    return (
        <section className="advice-sec">
            <div className="advice">
                <div className="image">
                    <img src={AdviceImg} alt={AdviceImg} />
                </div>
                <div className="content">
                    <div>
                        <motion.span className='subtitle' initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7, ease: 'easeOut' }}>ADVICE</motion.span>
                        <motion.h2 initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7, ease: 'easeOut' }}>Focused Strategies for Financial Success and Growth</motion.h2>
                        <ul>
                            <motion.li initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}>
                                <div className="icon">
                                    <i className="ri-arrow-right-box-fill"></i>
                                </div>
                                <div className="content">
                                    <h3>Strategic Growth Planning</h3>
                                    <p>Tailored strategies to boost your business's financial performance.</p>
                                </div>
                            </motion.li>
                            <motion.li initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7, ease: 'easeOut', delay: 0.4 }}>
                                <div className="icon">
                                    <i className="ri-arrow-right-box-fill"></i>
                                </div>
                                <div className="content">
                                    <h3>Expert Financial Insights</h3>
                                    <p>Access to in-depth analysis and recommendations from industry specialists.</p>
                                </div>
                            </motion.li>
                            <motion.li initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7, ease: 'easeOut', delay: 0.6 }}>
                                <div className="icon">
                                    <i className="ri-arrow-right-box-fill"></i>
                                </div>
                                <div className="content">
                                    <h3>Optimized Investment Strategies</h3>
                                    <p>Expert guidance on investments to maximize returns and minimize risks.</p>
                                </div>
                            </motion.li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FullWidthSec
