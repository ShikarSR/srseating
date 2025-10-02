import ProductAccessories from '@/components/Product/ProductAccessories';
import ProductCards from '@/components/Product/ProductCards';
import ProductComfort from '@/components/Product/ProductComfort';
import ProductExperience from '@/components/Product/ProductExperience';
import ProductFullWidthSlider from '@/components/Product/ProductFullWidthSlider';
import ProductHeader from '@/components/Product/ProductHeader';
import ProductOverlap from '@/components/Product/ProductOverlap';
import ProductParalax from '@/components/Product/ProductParalax';
import ProductSameFrame from '@/components/Product/ProductSameFrame';
import ProductScrollSection from '@/components/Product/ProductScrollSection';
import React from 'react';
import ProductList from '@/assets/jsonData/product/productlist/ProductDetailsData.json';
import { useParams } from 'react-router-dom';
import ProductRotateVideo from '@/components/Product/ProductRotateVideo';
import ProductDetailFullWidthSlider from '@/components/Product/ProductDetailFullWidthSlider';
import Navbar from '@/components/HeaderNav/Navbar';
import FooterV1 from '@/components/footer/FooterV1';
import ProductBlurPrint from '@/components/Product/ProductBluePrint';

const ProductPage = () => {
  const { id } = useParams();
  const product = ProductList.find(p => p.id === Number(id));
  if (!product) return <div>Product not found</div>;

  // Public assets can be referenced directly
  // Make sure JSON path matches real location in /public
  // e.g. "/assets/img/video/header_video.webm" OR "/video/header_video.webm"
  const videoPath = product.video?.file || '';
  const videos = videoPath ? [videoPath] : [];

  return (
    <section className="product_detail_page">
      <Navbar />
      <ProductHeader data={product} />
      <ProductOverlap data={product.overview} />
      <ProductParalax data={product.banner_quote} />
      <ProductScrollSection data={product.minimal_form}
  videoUrl={product.scroll_video?.videoUrl}
  
      />  
      <ProductRotateVideo videos={videos} />
      <ProductSameFrame data={product.variants_section} />
      <ProductExperience data={product.experience_section} />
      <ProductBlurPrint data={product.blue_print_section} />
      <ProductCards data={product.details_section} />
      <ProductFullWidthSlider data={product.projects_carousel} />
      <ProductAccessories data={product.accessories_section} />
    <ProductDetailFullWidthSlider data={product.models_section} />
      <ProductComfort />
      <FooterV1 />
    </section>
  );
};

export default ProductPage;
