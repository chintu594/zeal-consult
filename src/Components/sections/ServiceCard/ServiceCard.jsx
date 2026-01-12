import React from 'react'
import './ServiceCard.css'
import { Link } from 'react-router-dom'

const ServiceCard = ({ icon, hoverIcon, title, description }) => {
    return (
        <div className="service-card">
            <div className="service-icons">
                <img src={icon} alt={title} className='icon normal' />
                <img src={hoverIcon} alt={title} className='icon hover' />
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
            <Link to="/services">Details <i class="ri-arrow-right-line"></i></Link>
        </div>
    )
}

export default ServiceCard
