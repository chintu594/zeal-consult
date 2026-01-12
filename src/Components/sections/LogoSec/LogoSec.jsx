import React from 'react'
import { LogoData } from '../../../Context/ServiceCardsData'
import './LogoSec.css'
const LogoSec = () => {
    return (
        <section className="logo-sec">
            <div className="container">
                <div className="logo-row">
                    {LogoData.map((logo) => {
                        return (
                            <img key={logo.id} src={logo.img} alt={logo.img} />
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default LogoSec
