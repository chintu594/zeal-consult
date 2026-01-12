import React from 'react'
import RightImage from '../../Components/common/RightImage/RightImage'
import PostsSec from '../../Components/sections/PostsSec/PostsSec'

import PostBanner from '../../images/post_banner.jpg'
const Posts = () => {
    return (
        <main>
            <RightImage subTitle="Posts" title='Upcoming Webinar: Leveraging Data Analytics for Business Growth' desc={`Join Zeal Consulting's webinar, "Leveraging Data Analytics for Business Growth," to learn how data visualization, predictive analytics, and performance measurement can drive business success. Gain practical insights and hands-on experience from expert James Turner.`} btnText='Read More' btnUrl='/about' image={PostBanner} />
            <PostsSec limit={9} lodeMoreBtn={true} viewMoreBtn={false} />
        </main>
    )
}

export default Posts


