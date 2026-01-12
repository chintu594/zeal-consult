import React from 'react'
import Video from '../../../images/video.mp4'
import './VideoSec.css'
import { delay, motion } from 'framer-motion'
const VideoSec = () => {
    return (
        <section className="video-sec">
            <div className="container">
                <div className="video">
                    <motion.div className="title-sec" initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7, ease: 'easeOut' }}>
                        <span className='subtitle'>COLLABORATIVE APPROACH</span>
                        <h2>Harnessing Team Synergy for Outstanding Outcomes</h2>
                    </motion.div>
                    <motion.video src={Video} autoPlay loop muted initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }} />
                    <motion.p initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7, ease: 'easeOut', delay: 0.4 }}>Description: At Zeal Consult, teamwork is at the heart of everything we do. By combining our diverse skills and perspectives, we foster a collaborative environment where innovative solutions thrive. Our team works seamlessly together to ensure every project benefits from a holistic approach, leading to superior outcomes and client satisfaction. Discover how our united efforts drive success and make your vision a reality.</motion.p>
                </div>
            </div>
        </section>
    )
}

export default VideoSec
