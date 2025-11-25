import ContactBottom from '@/components/contact/ContactBottom'
import ContactMap from '@/components/contact/ContactMap'
import ContactUs from '@/components/contact/ContactUs'
import FooterV1 from '@/components/footer/FooterV1'
import HeaderV1 from '@/components/header/HeaderV1'
import Navbar from '@/components/HeaderNav/Navbar'
import React from 'react'
import {Helmet} from 'react-helmet'

const ContactPage = () => {
  return (

    <>
    <Helmet>
  <title>Contact Us</title>

  <meta
    name="description"
    content="Have questions or need a seating solution? Contact SR Seating to discuss your project, request a quote, or speak with our team. Corporate office and manufacturing unit located in Bangalore, India."
  />

  <meta
    name="keywords"
    content="contact seating manufacturer, seating supplier Bangalore, auditorium seating enquiry, cinema seating quote, SR Seating contact, seating solutions support"
  />

  <meta
    property="og:title"
    content="Let’s Talk Seating Solutions | SR Seating"
  />
  <meta
    property="og:description"
    content="Reach out to SR Seating for enquiries, consultations, and project support. We're here to help you create the right seating experience."
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://srseating.com/contact-us" />
  <meta property="og:image" content="https://srseating.blr1.cdn.digitaloceanspaces.com/image/favicon.svg" />

  <meta name="twitter:card" content="summary_large_image" />
</Helmet>


    <section className='contact_us_page'>
        <Navbar/>
        <ContactUs/>
        <ContactMap/>
        <ContactBottom/>
        <FooterV1/>
    </section>
    </>
  )
}

export default ContactPage