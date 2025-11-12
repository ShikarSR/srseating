import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import Home1 from './pages/homePages/Home1';
// import Home2 from './pages/homePages/Home2';
// import Home3 from './pages/homePages/Home3';
// import Home4 from './pages/homePages/Home4';
// import Home5 from './pages/homePages/Home5';

import AboutUsPage from './pages/aboutpage/AboutUsPage';
// import AboutUs2Page from './pages/innerPages/AboutUs2Page';
import TeamPage from './pages/innerPages/TeamPage';
import Team2Page from './pages/innerPages/Team2Page';
import TeamDetailsPage from './pages/innerPages/TeamDetailsPage';
import PricingPage from './pages/innerPages/PricingPage';
import FaqPage from './pages/innerPages/FaqPage';
// import ContactUsPage from './pages/innerPages/ContactUsPage';

// import ProjectPage from './pages/projectPages/ProjectPage';
// import Project2Page from './pages/projectPages/Project2Page';
// import Project3Page from './pages/projectPages/Project3Page';
// import ProjectDetailsPage from './pages/projectPages/ProjectDetailsPage';

// import ServicesPage from './pages/servicePages/ServicesPage';
// import Services2Page from './pages/servicePages/Services2Page';
// import Services3Page from './pages/servicePages/Services3Page';

import Blog2ColumnPage from './pages/blogPages/Blog2ColumnPage';
import BlogSingleWithSidebarPage from './pages/blogPages/BlogSingleWithSidebarPage';
import NotFoundPage from './pages/innerPages/NotFoundPage';
import Dashboard from './pages/dashboard/Dashboard';
import ShowContactDetail from './components/dashboard/sidebar/ShowContactDetail';
import SignUp from './components/dashboard/loginform/SignUp';
import SignIn from './components/dashboard/loginform/SignIn';
import MaseratiSlider from './components/home/HomeHeaderSlider';
import ProductPage from './pages/productpage/ProductPage';
import ProductListPage from './pages/productpage/ProductListPage';
import LeadershipPage from './pages/leardership/LeadershipPage';
import InnovationSustainabilityPage from './pages/innovation-sustainability/InnovationSustainabilityPage';
import ManufacturingPage from './pages/manufacturing/ManufacturingPage';
import CinemaPage from './pages/cinema/CinemaPage';
import PhotoGalleryPage from './pages/photogallery/PhotoGalleryPage';
import ContactPage from './pages/contactus/ContactPage';
// import BlogPage from './pages/blogPages/BlogPage';
import ResourcePage from './pages/resourcepage/ResourcePage';
// import WallOfSuccess from './pages/wallofsuccess/WallOfSuccessPage';
import WallOfSuccessPage from './pages/wallofsuccess/WallOfSuccessPage';
// import MegaMenu from './pages/menu/MegaMenu';
import TestContent from './pages/menu/TestContent';
import MenuOnePage from './pages/menu/MenuOnePage';
import AuditoriumPage from './pages/auditoriumPage/AuditoriumPage';
import EducationalPage from './pages/educationalPage/EducationalPage';
import HospitalityConventionPage from './pages/HospitalityConventionPage/HospitalityConventionPage';
import DefenseGovernmentPage from './pages/DefenseGovernmentPage/DefenseGovernmentPage';
import HomeTheaterPage from './pages/hometheaterPage/HomeTheaterPage';
// import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicyPage';
import PrivacyPolicyPage from './pages/PrivacyPolicy/PrivacyPolicyPage';
import TermsConditionPage from './pages/TermsCondition/TermsConditionPage';
import VideoTest from './components/Product/VideoTest';
const Routers = () => {
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';


    return (
        <>
       
        
            <Routes>
                <Route path="/video" element={<VideoTest/>}/>

                <Route path="/slider" element={<MaseratiSlider/>}/>
                <Route path='/menu' element={<TestContent/>} />
                <Route path='/menu1' element={<MenuOnePage/>} />
                
                <Route path='/' element={<Home1 />}></Route>
                <Route path='/our-story' element={<AboutUsPage />}></Route>
                <Route path='/leadership' element={<LeadershipPage />}></Route>
                <Route path='/product-list' element={<ProductListPage/>} />
                <Route path='/product-details/:id' element={<ProductPage/>} />
                <Route path='/sustainability' element={<InnovationSustainabilityPage/>} />
                <Route path='/manufacturing' element={<ManufacturingPage/>} />
                <Route path='/photo-gallery' element={<PhotoGalleryPage/>} />
                <Route path='/contact-us' element={<ContactPage/>}/>
                {/* <Route path='/contact-us' element={<ContactPage/>}/> */}

                <Route path='/cinema' element={<CinemaPage/>} />
                <Route path='/auditorium' element={<AuditoriumPage/>} />
                <Route path='/educational-institution' element={<EducationalPage/>} />
                <Route path='/hospitality-convention' element={<HospitalityConventionPage/>} />
                <Route path='/defense-government' element={<DefenseGovernmentPage/>} />
                <Route path='/home-theatre' element={<HomeTheaterPage/>} />
                <Route path='/privacy-policy' element={<PrivacyPolicyPage/>} />
                <Route path='/terms-conditions' element={<TermsConditionPage/>} />

                <Route path='/blog' element={<Blog2ColumnPage />}></Route>
                <Route path='/blog/:slug' element={<BlogSingleWithSidebarPage />} />
                <Route path='/resource' element={<ResourcePage />} />
                <Route path='/wall-of-success' element={<WallOfSuccessPage />} />



                {/* <Route path='/home-2' element={<Home2 />}></Route> */}
                {/* <Route path='/home-3' element={<Home3 />}></Route>
                <Route path='/home-4' element={<Home4 />}></Route>
                <Route path='/home-5' element={<Home5 />}></Route> */}

                {/* <Route path='/about-us-2' element={<AboutUs2Page />}></Route> */}
                <Route path='/team' element={<TeamPage />}></Route>
                <Route path='/team-2' element={<Team2Page />}></Route>
                <Route path='/team-details/:id' element={<TeamDetailsPage />}></Route>
                <Route path='/pricing' element={<PricingPage />}></Route>
                <Route path='/faq' element={<FaqPage />}></Route>
                {/* <Route path='/contact-us' element={<ContactUsPage />}></Route> */}



                {/* <Route path='/project' element={<ProjectPage />}></Route>
                <Route path='/project-2' element={<Project2Page />}></Route>
                <Route path='/project-3' element={<Project3Page />}></Route>
                <Route path='/project-details/:id' element={<ProjectDetailsPage />}></Route> */}

                {/* <Route path='/services' element={< ServicesPage />}></Route>
                <Route path='/services-2' element={<Services2Page />}></Route>
                <Route path='/services-3' element={<Services3Page />}></Route> */}
                {/* <Route path='/blog' element={<BlogPage/>}/>
                <Route path='/blog-detail?:page?' element={<Blog2ColumnPage />}></Route> */}
                {/* <Route path='/blog-detail/:id' element={<BlogSingleWithSidebarPage />}></Route> */}
{/* <Route path='/blog-detail/:slug-:id' element={<BlogSingleWithSidebarPage />} /> */}

                {/* <Route path='/services-details/:id' element={<ServicesDetailsPage />}></Route>
                <Route path='/blog-standard' element={<BlogStandardPage />}></Route>
                <Route path='/blog-standard?:page?' element={<BlogStandardPage />}></Route>
                <Route path='/blog-with-sidebar' element={<BlogWithSidebarPage />}></Route>
                <Route path='/blog-with-sidebar?:page?' element={<BlogWithSidebarPage />}></Route> */}
                {/* <Route path='/blog-3-column' element={<Blog3ColumnPage />}></Route>
                <Route path='/blog-3-column?:page?' element={<Blog3ColumnPage />}></Route>
                <Route path='/blog-single/:id' element={<BlogSinglePage />}></Route> */}

            <Route path="/dashboard" 
              element={isAuthenticated ? <Dashboard /> : <Navigate to="/srseating-signin" />}         
            
            />
            <Route path="/srcontact__detail" element={<ShowContactDetail />} /> 

             <Route path="/srseating-signin" element={<SignIn />} />
            <Route path="/srseating-signup" element={<SignUp />} />

                <Route path='*' element={<NotFoundPage />}></Route>
            </Routes>
      
        </>
    );
};

export default Routers;