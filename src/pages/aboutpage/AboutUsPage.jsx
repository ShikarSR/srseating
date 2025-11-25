import AboutFixedBottom from '@/components/about/AboutFixedBottom';
import AboutHeader from '@/components/about/AboutHeader';
import AboutParalax from '@/components/about/AboutParalax';
import AboutScrollVideo from '@/components/about/AboutScrollVideo';
import AboutV1 from '@/components/about/AboutV1';
import AboutV5 from '@/components/about/AboutV5';
import LayoutV5 from '@/components/layouts/LayoutV5';
import TeamV2 from '@/components/team/TeamV2';
import AboutFullImage from './AboutFullImage';
import SolutionsTestimonial from '@/components/solutions/SolutionsTestimonial';
import AboutThreeBox from '@/components/about/AboutThreeBox';
import {Helmet} from 'react-helmet'

const AboutUsPage = () => {


    return (
            <>
                <Helmet>
                          <title>Our Story </title>
  <meta
    name="description"
    content="Discover the journey of SR Seating — from a small vision to a global leader in auditorium and cinema seating. Built on craftsmanship, innovation, and over 1,500 successful projects across the world."
  />

  <meta
    name="keywords"
    content="SR Seating, auditorium seating, cinema seating, seating manufacturing, seating solutions, Indian seating manufacturer, premium seating, SR Seating story"
  />

  <meta property="og:title" content="The Story of SR Seating" />
  <meta
    property="og:description"
    content="Behind every seat is a story of precision, passion, and purpose. Learn how SR Seating creates spaces that stand the test of time."
  />
                </Helmet>



        
        <section className='about_us_page'>
            <LayoutV5>
                <AboutHeader/>
                <AboutV5 sectionClass="shape-less default-padding" />
                <AboutScrollVideo/>
                <AboutFullImage/>
                <AboutThreeBox/>
                {/* <WhyChooseV1 /> */}
                <AboutParalax/>
                {/* <AboutSlider/> */}
                <SolutionsTestimonial/>
                <AboutFixedBottom/>

                {/* <TeamV2 sectionClass="bg-gray" /> */}
                {/* <FactV1 sectionClass="bg-gray" />
                <AwardV1 />
                <TestimonialV2 sectionClass="shape-3" /> */}
            </LayoutV5>
        </section>
                </>
    );
};

export default AboutUsPage;