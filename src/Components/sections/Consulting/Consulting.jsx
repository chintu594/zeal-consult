import React from 'react'
import './Consulting.css'
import { ConsultingData } from '../../../Context/ServiceCardsData'
import { motion } from 'framer-motion'
const Consulting = () => {
    return (
        <section className="consulting-sec">
            <div className="container">
                <motion.div className="title-sec" initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7, ease: 'easeOut' }}>
                    <span className='light-subtitle'>CONSULTING</span>
                    <h2>Empowering your business to expand and thrive</h2>
                </motion.div>
                <div className="row">
                    {ConsultingData.map((item) => {
                        return (
                            <motion.div className="box" key={item.id} initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}>
                                <img src={item.icon} alt={item.title} />
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Consulting