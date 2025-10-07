import Animation from '../animation/Animation';
import ContactUsListPage from './ContactUsListPage';


const ContactUs = () => {
    return (
        <>
            <div className="contact-style-one-area overflow-hidden ">
                
                <div className="container">
                    <div className="row">
                        <div className="contact-stye-one col-lg-5 mb-md-50 mb-xs-40">
                            <div className="contact-style-one-info">
                                <h4 className="sr_btn">Contact US</h4>
                                <h2 className='font_64'>Have Questions? Let’s Talk</h2>
                                
                                <ul>
                                    <Animation className='animate__animated animate__fadeInUp' delay='100ms'>
                                        <li>
                                            <div className="icon">
                                               <img src="https://srseating.blr1.cdn.digitaloceanspaces.com/image/contactus/phone.svg" alt="phone" />
                                            </div>
                                            <div className="content">
                                                <h5 className="font_18">Hotline</h5>
                                                <a href="tel:+9606664000" className="font_24">+91 9606 6640 00</a>
                                            </div>
                                        </li>
                                    </Animation>

                                    <Animation className='animate__animated animate__fadeInUp' delay='500ms'>
                                        <li>
                                            <div className="icon">
                                                <img src="https://srseating.blr1.cdn.digitaloceanspaces.com/image/contactus/mail.svg" alt="mail" />
                                            </div>
                                            <div className="info">
                                                <h5 className="font_18">Email</h5>
                                                <a href="mailto:info@srseating.com" className="font_24">info@srseating.com</a>
                                            </div>
                                        </li>
                                    </Animation>

                                    <Animation className='animate__animated animate__fadeInUp' delay='300ms'>
                                        <li>
                                            <div className="icon">
                                                         <img src="https://srseating.blr1.cdn.digitaloceanspaces.com/image/contactus/location.svg" alt="location" />
                                            </div>
                                            <div className="info">
                                                <h5 className="font_18">Corporate Office</h5>
                                                <p className="font_24">
                                                    # V13, 6th Main, Narayanappa Block,<br/> RT Nagar, Bangalore – 560032
                                                </p>
                                            </div>
                                        </li>
                                    </Animation>

                                    <Animation className='animate__animated animate__fadeInUp' delay='300ms'>
                                        <li>
                                            <div className="icon">
                                                         <img src="https://srseating.blr1.cdn.digitaloceanspaces.com/image/contactus/location.svg" alt="location" />
                                            </div>
                                            <div className="info">
                                                <h5 className="font_18">Manufacturing Unit</h5>
                                                <p className='font_24'>
                                                   # A43/02, Kannamangala Village,<br/> 
                                                    Nelamangala - Doddaballapur Road, <br/>
                                                   Madhure Hobli, Doddaballapur Taluk, <br/>
                                                   Bangalore, Karnataka - 561203
                                                </p>
                                            </div>
                                        </li>
                                    </Animation>
                                   
                                </ul>
                            </div>
                        </div>
                        <div className="contact-stye-one col-lg-7 ">
                            <div className="contact-form-style-one">
                                <h2 className="font_44">Send us a Message</h2>
                                <ContactUsListPage />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactUs;