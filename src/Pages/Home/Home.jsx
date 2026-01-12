import React from 'react'
import RightImage from '../../Components/common/RightImage/RightImage'
import ServiceCardsSec from '../../Components/sections/ServiceCardsSec/ServiceCardsSec'
import HomeImg from '../../images/intro.avif'
import CounterSec from '../../Components/sections/CounterSec/CounterSec'
import FullWidthSec from '../../Components/sections/FullWidthSec/FullWidthSec'
import OurSectors from '../../Components/sections/OurSectors/OurSectors'
import PostsSec from '../../Components/sections/PostsSec/PostsSec'
import SolutionImg from '../../images/solution.jpg'
import LogoSec from '../../Components/sections/LogoSec/LogoSec'
const Home = () => {
    return (
        <main>
            <RightImage subTitle='EMPOWER YOUR BRAND' title='Elevate Your Business with Expert Website Consulting' desc="Transform your online presence with expert website consulting. We provide tailored strategies and designs to drive your business’s growth. Let's build your digital future together." btnText='Know More' btnUrl='/about' image={HomeImg} />
            <ServiceCardsSec
                subTitle="BUSINESS CONSULTING"
                mainTitle="What services do we offer for your business"
                desc="See how our tailored solutions can boost your business. From planning to support, we provide the expertise to drive your success."
                showLink={true}
                limit={6}
            />
            <CounterSec />
            <FullWidthSec />
            <OurSectors />
            <RightImage subTitle='SOLUTION' title='Cutting-Edge Solutions for Modern Enterprises' desc="Delivering innovative strategies and advanced solutions to drive success in today’s evolving business landscape. Empowering modern enterprises with the tools to stay ahead of the curve." btnText='Get In Touch' btnUrl='/contact' image={SolutionImg} varient='secondary' />
            <PostsSec limit={3} lodeMoreBtn={false} viewMoreBtn={true} />
            <LogoSec />
        </main>
    )
}

export default Home