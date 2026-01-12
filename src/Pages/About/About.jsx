import React from 'react'
import RightImage from '../../Components/common/RightImage/RightImage'
import AboutBanner from '../../images/about_banner.avif'
import Consulting from '../../Components/sections/Consulting/Consulting'
import Team from '../../Components/sections/Team/Team'
import BusinessLevel from '../../Components/sections/BusinessLevel/BusinessLevel'
import FaqSec from '../../Components/sections/FaqSec/FaqSec'
import PostsSec from '../../Components/sections/PostsSec/PostsSec'
import Solution2 from '../../images/solution2.avif'
const About = () => {
    return (
        <main>
            <RightImage subTitle='ABOUT' title='We assist our clients in maintaining a clear vision.' desc='Our services provide a strategic overview, keeping clients focused on long-term goals.' btnText='Get in Touch' btnUrl='/contact' image={AboutBanner} />
            <Consulting />
            <Team />
            <BusinessLevel />
            <RightImage subTitle='SOLUTION' title='Cutting-Edge Solutions for Modern Enterprises' desc="Delivering innovative strategies and advanced solutions to drive success in today’s evolving business landscape. Empowering modern enterprises with the tools to stay ahead of the curve." btnText='Get In Touch' btnUrl='/contact' image={Solution2} varient='secondary' />
            <FaqSec />
            <PostsSec limit={3} lodeMoreBtn={false} viewMoreBtn={true} />
        </main>
    )
}

export default About
