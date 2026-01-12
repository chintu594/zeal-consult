import React from 'react'
import { TeamData } from '../../../Context/ServiceCardsData'
import './Team.css'
import { delay, motion } from 'framer-motion'
const Team = () => {
    return (
        <section className="team-sec">
            <div className="container">
                <motion.div className="title-sec" initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7, ease: 'easeOut' }}>
                    <span className='light-subtitle'>TEAM</span>
                    <h2>Meet Our Experts</h2>
                </motion.div>
                <div className="team-grid">
                    {TeamData.map((card) => {
                        return (
                            <motion.div className="card" key={card.id} initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}>
                                <img src={card.img} alt={card.title} />
                                <div>
                                    <h3>{card.title}</h3>
                                    <p>{card.post}</p>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Team
