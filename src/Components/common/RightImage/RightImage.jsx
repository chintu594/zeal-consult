import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion";
import './RightImage.css'
const RightImage = ({ subTitle, title, desc, btnText, btnUrl, image, varient }) => {
    return (
        <section className={`parent-sec ${varient === "secondary" ? "low-padding" : ""} ${varient === "service-solution" ? "service-solution" : ""}`}>
            <div className="container">
                <div className="grid">
                    <motion.div className="content"
                        initial={{ opacity: 0, x: -80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: 'easeOut', delay: 0.1 }}
                        viewport={{ once: true }}>
                        <span className='subtitle'>
                            {subTitle}
                        </span>
                        <h1>{title}</h1>
                        <p>{desc}</p>
                        <Link to={btnUrl} className="btn">{btnText}</Link>
                         <Link to='*' className="btn">404 page</Link>
                    </motion.div>
                    <motion.div className="image"
                        initial={{ opacity: 0, x: 80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
                        viewport={{ once: true }}>
                        <img src={image} alt="HomeImage" />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default RightImage
