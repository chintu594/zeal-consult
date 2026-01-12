import React, { useState } from 'react'
import './SubmitForm.css'
import ContactImg from '../../../images/submit_form_img.avif'
import { motion } from 'framer-motion'
const SubmitForm = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [formError, setFormError] = useState('')
    const [submitted, setSubmitted] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!firstName || !lastName || !phone || !email || !subject || !message) {
            setFormError("Please, Fill your all empty inputs first");
            return
        }
        setFormError('');
        setLoading(true);
        setTimeout(() => {
            setLoading(false)
            setSubmitted(true);
        }, 3000)
        console.log({ firstName, lastName, phone, email, subject, message })
    }
    return (
        <section className="submit-sec">
            <div className="container">
                <div className="submit-form">
                    <motion.div className="image" initial={{ opacity: 0, x: -60 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7, ease: 'easeOut' }}>
                        <img src={ContactImg} alt='Contact form image' />
                    </motion.div>
                    <motion.div className="form-sec" initial={{ opacity: 0, x: 60 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}>
                        <span className='light-subtitle'>BUSINESS CONSULTING</span>
                        <h2>Get in touch</h2>

                        {!submitted ? (<form action="#" className={`form ${formError ? "errro-show" : ''}`} onSubmit={handleSubmit} >
                            <ul>
                                <li>
                                    <label htmlFor='firstName'>First Name</label>
                                    <input type="text" placeholder='First Name' className='first_name' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                                </li>
                                <li>
                                    <label htmlFor='lastName'>Last Name</label>
                                    <input type="text" placeholder='Last Name' className='last_name' value={lastName} onChange={(e) => setLastName(e.target.value)} />
                                </li>
                                <li>
                                    <label htmlFor='phone'>Your Phone</label>
                                    <input type="text" placeholder='Your Phone' className='your_phone' value={phone} onChange={(e) => setPhone(e.target.value)} />
                                </li>
                                <li>
                                    <label htmlFor='email'>Your Email</label>
                                    <input type="text" placeholder='Your Email' className='your_email' value={email} onChange={(e) => setEmail(e.target.value)} />
                                </li>
                                <li className='subject_parent'>
                                    <label htmlFor='subject'>Subject</label>
                                    <input type="text" placeholder='Example Text' className='subject' value={subject} onChange={(e) => setSubject(e.target.value)} />
                                </li>
                                <li className='message_parent'>
                                    <label htmlFor='message'>Your Message</label>
                                    <input type="text" placeholder='Your Message' className='message' value={message} onChange={(e) => setMessage(e.target.value)} />
                                </li>
                                <button type='submit' className='btn'>{loading ? "Please wait..." : "Send message"}</button>
                            </ul>
                        </form>) : (<div className="success-msg btn">
                            Thank you! Your submission has been received!
                        </div>)}
                        {formError && (
                            <p className="form-error">{formError}</p>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default SubmitForm