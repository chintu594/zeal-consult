import React from 'react'
import RightImage from '../../Components/common/RightImage/RightImage'
import ContactBanner from '../../images/contact__banner.avif'
import ContactInfo from '../../Components/sections/ContactInfo/ContactInfo'
import SubmitForm from '../../Components/sections/SubmitForm/SubmitForm'
import LocationCards from '../../Components/sections/LocationCards/LocationCards'
const Contact = () => {
    return (
        <main>
            <RightImage subTitle='CONTACT' title='Always searching for improved solutions.' desc={`Reach out for inquiries, support, or to schedule a consultation. We're here to assist you.`} btnText='Know More' btnUrl='/about' image={ContactBanner} />
            <ContactInfo />
            <SubmitForm />
            <LocationCards />
        </main>
    )
}

export default Contact
