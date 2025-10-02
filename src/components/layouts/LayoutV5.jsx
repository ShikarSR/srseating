import FooterV1 from '../footer/FooterV1';
import HeaderV5 from '../header/HeaderV5';
import BreadCrumb from '../breadCrumb/BreadCrumb';
import HeaderV1 from '../header/HeaderV1';
import Navbar from '../HeaderNav/Navbar';

const LayoutV5 = ({ children, breadCrumb, title }) => {
    return (
        <>
            <Navbar />
            {breadCrumb && <BreadCrumb breadCrumb={breadCrumb} title={title} />}
            {children}
            <FooterV1 />
        </>
    );
};

export default LayoutV5;