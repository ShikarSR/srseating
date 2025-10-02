import HeaderV1 from '../header/HeaderV1';
import FooterV1 from '../footer/FooterV1';
import MegaMenu from '../HeaderNav/MegaMenu';
import Navbar from '../HeaderNav/Navbar';

const LayoutV1 = ({ children }) => {
    return (
        <section className='header_menu'>
        {/* <MegaMenu/> */}
        <Navbar/>
            {/* <HeaderV1 /> */}
            {children}
            <FooterV1 />
        </section>
    );
};

export default LayoutV1;