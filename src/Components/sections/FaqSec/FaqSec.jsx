import React, { useState } from 'react'
import './FaqSec.css'
import { FaqData } from '../../../Context/ServiceCardsData';
import { motion, AnimatePresence, delay } from 'framer-motion';
const FaqSec = () => {
    const [activeId, setActiveId] = useState(1);

    const toggleAccordion = (id) => {
        setActiveId(id);
    }
    return (
        <section className="faq-sec">

            <div className="container">
                <motion.div className="title-sec" initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7, ease: 'easeOut' }}>
                    <span className='subtitle'>FAQ</span>
                    <h2>Frequently asked question</h2>
                </motion.div>
                <motion.div className="faq-box" initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}>
                    {FaqData.map((item) => {
                        return (
                            <div className="accordion-item" key={item.id}>
                                <div className="accordion-header" onClick={() => toggleAccordion(item.id)}>
                                    <h4>{item.title}</h4>
                                    <span>{activeId === item.id ? "-" : "+"}</span>
                                </div>
                                <AnimatePresence>
                                    <div className="acc-content-outer">
                                        {activeId === item.id && (
                                            <motion.div className="accordion-content" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.6 }}>
                                                <p>{item.desc}</p>
                                            </motion.div>
                                        )}
                                    </div>
                                </AnimatePresence>
                            </div>
                        )
                    })}
                </motion.div>
            </div>
        </section>
    )
}

export default FaqSec
