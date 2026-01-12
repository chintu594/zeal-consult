import React, { useEffect, useRef, useState } from 'react'
import './BusinessLevel.css'
import BusinessImg from '../../../images/business-level_img.avif'
import { ProgressData } from '../../../Context/ServiceCardsData'
import { motion } from 'framer-motion'

const BusinessLevel = () => {

    const sectionRef = useRef(null)
    const [animate, setAnimate] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setAnimate(true)
                    observer.disconnect() // run once
                }
            },
            { threshold: 0.3 }
        )

        if (sectionRef.current) {
            observer.observe(sectionRef.current)
        }

        return () => observer.disconnect()
    }, [])

    return (
        <section className="business-level-sec" ref={sectionRef}>
            <div className="container">
                <div className="row">
                    <motion.div className="img" initial={{ opacity: 0, x: 60 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7, ease: 'easeOut' }}>
                        <img src={BusinessImg} alt="Business level" />
                    </motion.div>

                    <motion.div className="content" initial={{ opacity: 0, x: -60 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7, ease: 'easeOut' }}>
                        <span className='light-subtitle'>BUSINESS LEVEL</span>
                        <h2>
                            Advance your small<br />
                            business to the next level of success.
                        </h2>
                        <p>
                            Unlock new opportunities and drive sustainable growth for your small business.
                        </p>

                        <div className="progress-wrap">
                            {ProgressData.map((item) => (
                                <div className="progerss-item" key={item.id}>
                                    <div className="progress-title">
                                        <span>{item.label}</span>
                                    </div>

                                    <div className="progress-bar">
                                        <div
                                            className={`progress-fill ${animate ? 'animate' : ''}`}
                                            style={{ '--progress': `${item.value}%` }}
                                        ></div>
                                        <span>{item.value}%</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default BusinessLevel
