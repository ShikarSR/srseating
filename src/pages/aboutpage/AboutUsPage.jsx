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

const AboutUsPage = () => {
    return (
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
    );
};

export default AboutUsPage;