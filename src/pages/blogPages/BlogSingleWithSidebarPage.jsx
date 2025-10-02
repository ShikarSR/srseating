// src/pages/BlogSingleWithSidebarPage.jsx
import { useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import BlogData from '@/assets/jsonData/blog/BlogData.json';
import BlogSingleWithSidebarContent from '@/components/home/BlogSingleWithSidebarContent';
import BodyClassV2 from '@/components/classes/BodyClassV2';
import LayoutV5 from '@/components/layouts/LayoutV5';

const normalizeSlug = (s = "") =>
  decodeURIComponent(String(s)).trim().toLowerCase().replace(/\s+/g, "-");

const BlogSingleWithSidebarPage = () => {
  const { slug } = useParams();

  const post = useMemo(() => {
    const want = normalizeSlug(slug);
    return BlogData.find(b => normalizeSlug(b.slug) === want);
  }, [slug]);

  useEffect(() => { window.scrollTo(0, 0); }, [slug]);

  if (!post) {
    return (
      <LayoutV5 breadCrumb="blog" title="Post not found">
        <div className="container py-80">
          <h2>Post not found</h2>
          <p>The blog you’re looking for doesn’t exist or was moved.</p>
        </div>
        <BodyClassV2 />
      </LayoutV5>
    );
  }

  return (
    <LayoutV5 breadCrumb="blog" title={post.title}>
      <BlogSingleWithSidebarContent blogInfo={post} />
      <BodyClassV2 />
    </LayoutV5>
  );
};

export default BlogSingleWithSidebarPage;
