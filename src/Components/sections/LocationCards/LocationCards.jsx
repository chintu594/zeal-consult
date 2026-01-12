import React from 'react'
import './LocationCards.css'
import { locationData } from '../../../Context/ServiceCardsData'
import { delay, motion } from 'framer-motion'
const LocationCards = () => {
    return (
        <section className="location-cards">
            <div className="container">
                <motion.div className="service-header" initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7, ease: 'easeOut' }}>
                    <div className="left-content">
                        <span className='light-subtitle'>LOCATION</span>
                        <h2>Our Working Location</h2>
                    </div>
                    <div className="right-content">
                        <p>Discover where we operate and how we can serve you. Our locations offer personalized support.</p>
                    </div>
                </motion.div>
                <motion.div className="location-row" initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}>
                    {locationData.map((item) => {
                        return (
                            <div className="card" key={item.id}>
                                <img src={item.img} alt={item.name} />
                                <div className="content">
                                    <h3>
                                        {item.name}
                                    </h3>
                                    <p>{item.address}</p>
                                    <a href={`mailto:${item.email}`} className='email'>{item.email}</a>
                                    <a href={`tel:${item.phone}`} className='phone'>{item.phone}</a>
                                </div>
                            </div>
                        )
                    })}
                </motion.div>
            </div>
        </section>
    )
}

export default LocationCards
