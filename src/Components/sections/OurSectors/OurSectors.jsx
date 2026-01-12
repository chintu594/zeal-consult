import React from 'react'
import './OurSectors.css'
import { SectorData } from '../../../Context/ServiceCardsData'
import { motion } from 'framer-motion'
const OurSectors = () => {
    return (
        <section className="sector-sec">
            <div className="container">
                <motion.div className="sector-header" initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7, ease: 'easeOut' }}>
                    <span className='light-subtitle'>SECTORS</span>
                    <h2>Our Expertise Across Various Economic Sectors</h2>
                </motion.div>
                <motion.div className="sector-grid" initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}>
                    {SectorData.map((box) => {
                        return (
                            <div className="box" key={box.id}>
                                <img src={box.img} alt={box.Heading} />
                                <h3>{box.Heading}</h3>
                            </div>
                        )
                    })}
                </motion.div>
            </div>
        </section>
    )
}

export default OurSectors
