// import logo from "/assets/img/logo.png";
import MainMenu from './MainMenu';
import useSubMenuToggle from '@/hooks/useSubMenuToggle';
import useStickyMenu from '@/hooks/useStickyMenu';
import useSidebarMenu from '@/hooks/useSidebarMenu';
import { Link } from 'react-router-dom';

const HeaderV1 = () => {

    const toggleSubMenu = useSubMenuToggle();
    const isMenuSticky = useStickyMenu();
    const { isOpen, openMenu, closeMenu } = useSidebarMenu();

    return (
        <>
        
            <header>
                <nav className={`navbar  mobile-sidenav navbar-sticky navbar-default validnavs navbar-fixed dark on menu-center no-full ${isMenuSticky ? 'sticked' : 'no-background'} ${isOpen ? "navbar-responsive" : ""}`}>
                    <div className="container d-flex px-0 justify-content-between align-items-center">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu" onClick={openMenu}>
                                <i className="fa fa-bars" />
                            </button>
                            <Link className="navbar-brand" to="/">
                                <img src="https://srseating.blr1.cdn.digitaloceanspaces.com/image/srlogo.png" className="logo" alt="Logo" />
                            </Link>
                        </div>
                        <div className={`collapse navbar-collapse ${isOpen ? "show collapse-mobile" : "collapse-mobile"} center_menu`} id="navbar-menu">
                            <img src="https://srseating.blr1.cdn.digitaloceanspaces.com/image/srlogo.png" alt="Logo" />
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu" onClick={closeMenu}>
                                <i className="fa fa-times" />
                            </button>
                            <MainMenu navbarPlacement="navbar-center" toggleSubMenu={toggleSubMenu} />
                        </div>
                        {/* <div className="attr-right">
                            <div className="attr-nav">
                                <ul>
                                    <li className="button">
                                        <Link to="/contact-us">Contact Us</Link>
                                    </li>
                                </ul>
                            </div>
                        </div> */}

                                   

                    </div>
                    <div className={`overlay-screen ${isOpen ? "opened" : ""}`} onClick={closeMenu} />
                </nav>
            </header>
        </>
    );
};

export default HeaderV1;