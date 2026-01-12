import React from 'react'
import './Services.css'
import ServiceCardsSec from '../../Components/sections/ServiceCardsSec/ServiceCardsSec'
import CTASection from '../../Components/sections/CTASection/CTASection'

import RightImage from '../../Components/common/RightImage/RightImage'
import LogoSec from '../../Components/sections/LogoSec/LogoSec'
import VideoSec from '../../Components/sections/VideoSec/VideoSec'
import PostsSec from '../../Components/sections/PostsSec/PostsSec'


/* images */
import ServiceImg from '../../images/intro.avif'
import serviceSolutionImg from '../../images/service_solution_img.avif'
const Services = () => {
    return (
        <main>
            <RightImage subTitle='SERVICES' title='Find out how our services can elevate your business potential' desc='Unlock new opportunities and achieve greater success with our expert services.' btnText='Know More' btnUrl='/about' image={ServiceImg} />
            <ServiceCardsSec subTitle='SERVICES' mainTitle='Explore the services we offer to support your business' desc="See how our tailored solutions can boost your business. From planning to support, we provide the expertise to drive your success." showLink={false} limit={9} />

            <RightImage subTitle='SOLUTION' title='Cutting-Edge Solutions for Modern Enterprises' desc='Delivering innovative strategies and advanced solutions to drive success in today’s evolving business landscape. Empowering modern enterprises with the tools to stay ahead of the curve.' btnText='Get in Touch' btnUrl='/contact' image={serviceSolutionImg} varient='service-solution' />
            <LogoSec />
            <VideoSec />
            <PostsSec limit={3} lodeMoreBtn={false} viewMoreBtn={true} />
            <CTASection title='Looking for fresh and innovative ideas?' body='Get ahead with creative solutions from Zeal Consulting. We turn bold ideas into actionable strategies tailored to your goals.' btnUrl='/contact' btnText='Get in Touch' />
        </main>
    )
}

export default Services
