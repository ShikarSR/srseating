import BlogSingleContent from '@/components/blog/BlogSingleContent';
import BlogData from '@/assets/jsonData/blog/BlogData.json';
import BodyClassV2 from '@/components/classes/BodyClassV2';
import LayoutV5 from '@/components/layouts/LayoutV5';
import { useParams } from 'react-router-dom';
import Blog2ColumnContent from '@/components/blog/Blog2ColumnContent';
import HeaderV1 from '@/components/header/HeaderV1';
import FooterV1 from '@/components/footer/FooterV1';

const BlogPage = () => {
  return (
    <section className='blog_page'>
            <HeaderV1/>
                <Blog2ColumnContent />
                <BodyClassV2 />
            <FooterV1/>
    </section>
  )
}

export default BlogPage