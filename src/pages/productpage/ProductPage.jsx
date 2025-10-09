import React from 'react';
import { useParams } from 'react-router-dom';

import Navbar from '@/components/HeaderNav/Navbar';
import FooterV1 from '@/components/footer/FooterV1';

import ProductHeader from '@/components/Product/ProductHeader';
import ProductOverlap from '@/components/Product/ProductOverlap';
import ProductParalax from '@/components/Product/ProductParalax';
import ProductScrollSection from '@/components/Product/ProductScrollSection';
import ProductRotateVideo from '@/components/Product/ProductRotateVideo';
import ProductSameFrame from '@/components/Product/ProductSameFrame';
import ProductExperience from '@/components/Product/ProductExperience';
import ProductBluePrint from '@/components/Product/ProductBluePrint'; // a.k.a. ProductBlurPrint in some files
import ProductCards from '@/components/Product/ProductCards';
import ProductFullWidthSlider from '@/components/Product/ProductFullWidthSlider';
import ProductAccessories from '@/components/Product/ProductAccessories';
import ProductDetailFullWidthSlider from '@/components/Product/ProductDetailFullWidthSlider';

import ProductList from '@/assets/jsonData/product/productlist/ProductDetailsData.json';
import ProductComfort from '@/components/Product/ProductComfort';
import ProductTestSlider from '@/components/Product/ProductTestSlider';

// ids you want special CSS hooks for
const CUSTOM_IDS = new Set([100, 200, 15, 14, 11]);

const ProductPage = () => {
  const { id } = useParams();
  const numId = Number(id);

  const product = ProductList.find((p) => p.id === numId);
  if (!product) return <div>Product not found</div>;

  // ---- video lines you asked about ----
  const videoPath = product?.video?.file ?? '';
  const videos = videoPath ? [videoPath] : [];
  // -------------------------------------

  // add page-level classes without removing your existing markup
  const pageClass =
    `product_detail_page pid-${numId}` + (CUSTOM_IDS.has(numId) ? ' is-custom' : '');

  return (
    <section className={pageClass} data-product-id={numId}>
      <Navbar />
        {/* <ProductTestSlider/> */}
      <ProductHeader data={product} />
      <ProductOverlap data={product.overview} />
      <ProductParalax data={product.banner_quote} />

      <ProductScrollSection
      data={product.minimal_form}
  videoUrl={product.scroll_video?.videoUrl}
     youtubeLink = {product.scroll_video.youtubeUrl}
      />

      <ProductRotateVideo videoData={product.video}   />

      <ProductSameFrame data={product.variants_section} />
      <ProductExperience data={product.experience_section} />
      <ProductBluePrint data={product.blue_print_section} />

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
