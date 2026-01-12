import React, { useEffect, useRef, useState } from 'react'
import './CounterSec.css'
import { motion } from 'framer-motion';

const CounterSec = () => {
    const ref = useRef(null);
    const [start, setStart] = useState(false);
    const [count, setCount] = useState([0, 0, 0, 0]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => entry.isIntersecting && setStart(true),
            { threshold: 0.5 }
        );

        observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!start) return;

        const targets = [100, 95, 50, 90];

        const timer = setInterval(() => {
            setCount(prev =>
                prev.map((num, i) =>
                    num < targets[i] ? num + 1 : num
                )
            );
        }, 50);

        return () => clearInterval(timer);
    }, [start]);

    return (
        <section className="counter-sec" ref={ref}>
            <div className="container">
                <div className="counter">
                    <motion.div initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7, ease: 'easeOut' }}><span>{count[0]}+</span><p>Projects Completed</p></motion.div>
                    <motion.div initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}><span>{count[1]}%</span><p>Client Satisfaction</p></motion.div>
                    <motion.div initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7, delay: 0.6, ease: 'easeOut' }}><span>${count[2]}M+</span><p>Revenue Generated</p></motion.div>
                    <motion.div initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7, delay: 0.9, ease: 'easeOut' }}><span>{count[3]}%</span><p>Project Success Rate</p></motion.div>
                </div>
            </div>
        </section>
    )
}

export default CounterSec
