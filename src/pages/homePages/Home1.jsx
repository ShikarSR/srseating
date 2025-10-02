import AboutV1 from '@/components/about/AboutV1';
import BannerV1 from '@/components/banner/BannerV1';
import BlogV1 from '@/components/home/BlogV1';
import FactV1 from '@/components/fact/FactV1';
import FeatureV1 from '@/components/feature/FeatureV1';
import CraftToBe from '@/components/home/CraftToBe';
import HomeFullWidthSlider from '@/components/home/HomeFullWidthSlider';
import LayoutV1 from '@/components/layouts/LayoutV1';
import MaseratiSlider from '@/components/home/HomeHeaderSlider';
import ProductYears from '@/components/Product/ProductList/ProductYears';
import ProjectV1 from '@/components/projects/ProjectV1';
import ServicesV1 from '@/components/services/ServicesV1';
import TeamV1 from '@/components/team/TeamV1';
import TestimonialV1 from '@/components/testimonial/TestimonialV1';
import WhyChooseV1 from '@/components/whyChoose/WhyChooseV1';
import '../../assets/css/sr-style.css'
import ArtSeat from '@/components/home/ArtSeat';
import LuxuryBuild from '@/components/home/LuxuryBuild';
import HomeThreeBoxes from '@/components/home/HomeThreeBoxes';
import HomeEveryGreat from '@/components/home/HomeEveryGreat';
import HomeHeaderSlider from '@/components/home/HomeHeaderSlider';
const Home1 = () => {
    return (
        <section className='home_page'>
            <LayoutV1>
                <HomeHeaderSlider/>
                    <CraftToBe/>
                <HomeFullWidthSlider/>
                <ArtSeat/>
                <LuxuryBuild/>
                <HomeThreeBoxes/>
                <BlogV1 sectionClass="default-padding" />
                <HomeEveryGreat/>
            </LayoutV1>
        </section>
    );
};

export default Home1;