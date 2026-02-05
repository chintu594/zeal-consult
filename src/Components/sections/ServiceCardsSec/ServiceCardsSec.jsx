import React from 'react'
import { Link } from 'react-router-dom'
import './ServiceCardsSec.css'
import ServiceCard from '../ServiceCard/ServiceCard'
import { ServiceData } from '../../../Context/ServiceCardsData'
import { useState } from 'react'
import { motion } from 'framer-motion'
const ServiceCardsSec = ({ subTitle, mainTitle, desc, showLink, limit }) => {
    const [visibleCards, setVisibleCards] = useState(limit)
    const showAllCards = () => {
        setVisibleCards(ServiceData.length);
    };

    return (
        <section className="service-sec">
            <div className="container">
                <motion.div className="service-header" initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7, ease: 'easeOut' }}>
                    <div className="left-content">
                        <span className='light-subtitle'>{subTitle}</span>
                        <h2>{mainTitle}</h2>
                    </div>
                    <div className="right-content">
                        <p>{desc}</p>
                        {showLink && (
                            <Link to='/services' className='service_btn'>All services</Link>
                        )}
                    </div>
                </motion.div>
                <motion.div className="service-grid" initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5, ease: 'easeOut' }}>
                    {ServiceData.slice(0, visibleCards).map((item) => {
                        return (
                            <ServiceCard key={item.id} icon={item.icon} hoverIcon={item.hoverIcon} title={item.title} description={item.description} />
                        )
                    })}
                </motion.div>
                {visibleCards < ServiceData.length && (
                    <div className="view-more">
                        <Link className="btn" onClick={showAllCards}>View All</Link>
                    </div>
                )}
            </div>
        </section>
    )
}

export default ServiceCardsSec
