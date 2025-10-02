
import BlogV1 from '@/components/home/BlogV1';

import CraftToBe from '@/components/home/CraftToBe';
import HomeFullWidthSlider from '@/components/home/HomeFullWidthSlider';
import LayoutV1 from '@/components/layouts/LayoutV1';

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