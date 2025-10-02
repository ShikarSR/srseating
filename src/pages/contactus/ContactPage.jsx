import ContactBottom from '@/components/contact/ContactBottom'
import ContactMap from '@/components/contact/ContactMap'
import ContactUs from '@/components/contact/ContactUs'
import FooterV1 from '@/components/footer/FooterV1'
import HeaderV1 from '@/components/header/HeaderV1'
import Navbar from '@/components/HeaderNav/Navbar'
import React from 'react'

const ContactPage = () => {
  return (
    <section className='contact_us_page'>
        <Navbar/>
        <ContactUs/>
        <ContactMap/>
        <ContactBottom/>
        <FooterV1/>
    </section>
  )
}

export default ContactPage