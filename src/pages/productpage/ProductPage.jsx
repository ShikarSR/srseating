import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "@/components/HeaderNav/Navbar";
import FooterV1 from "@/components/footer/FooterV1";
import ProductHeader from "@/components/Product/ProductHeader";
import ProductOverlap from "@/components/Product/ProductOverlap";
import ProductParalax from "@/components/Product/ProductParalax";
import ProductScrollSection from "@/components/Product/ProductScrollSection";
import ProductExperience from "@/components/Product/ProductExperience";
import ProductBluePrint from "@/components/Product/ProductBluePrint";
import ProductCards from "@/components/Product/ProductCards";
import ProductFullWidthSlider from "@/components/Product/ProductFullWidthSlider";
import ProductAccessories from "@/components/Product/ProductAccessories";
import ProductDetailFullWidthSlider from "@/components/Product/ProductDetailFullWidthSlider";
import ProductList from "@/assets/jsonData/product/productlist/ProductDetailsData.json";
import VideoTest from "@/components/Product/VideoTest";
import DownloadPopup from "../../assets/jsonData/product/Popup";
import {Helmet} from 'react-helmet'
const CUSTOM_IDS = new Set([100, 200, 15, 14, 11]);

const ProductPage = () => {
  const { id } = useParams();
  const numId = Number(id);
  const [showPopup, setShowPopup] = useState(false);
  const product = ProductList.find((p) => p.id === numId);

  if (!product) return <div>Product not found</div>;

  const pageClass =
    `product_detail_page pid-${numId}` + (CUSTOM_IDS.has(numId) ? " is-custom" : "");

  // 🔽 Handle Download TDS click
  const handleDownloadTDS = () => {
    setShowPopup(true);
  };

  return (

    <>
    
    <Helmet>
  <title>Seating Products</title>

  <meta
    name="description"
    content="Explore SR Seating’s complete range of premium auditorium, cinema, institutional, and home theatre seating. Thoughtfully engineered for comfort, durability, and performance across every space."
  />

  <meta
    name="keywords"
    content="seating products, auditorium chairs, cinema seating, institutional seating, recliner seating, commercial seating solutions, SR Seating products, seating manufacturer India"
  />

  <meta
    property="og:title"
    content="The Art of Seating, Perfected for You | SR Seating"
  />
  <meta
    property="og:description"
    content="Discover a curated lineup of premium seating designed with precision engineering, quality materials, and over 3 lakh+ installations nationwide."
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://srseating.com/products" />
  <meta property="og:image" content="https://srseating.blr1.cdn.digitaloceanspaces.com/image/favicon.svg" />

  <meta name="twitter:card" content="summary_large_image" />
</Helmet>

    <section className={pageClass} data-product-id={numId}>
      <Navbar />
      <ProductHeader data={product} />

      {/* Replace your "Download TDS" button with this */}
      <div className="text-center my-8">
        <button className="primary-btn" onClick={handleDownloadTDS}>
          Download TDS
        </button>
      </div>

      <ProductOverlap data={product.overview} />
      <ProductParalax data={product.banner_quote} />
      <ProductScrollSection
        data={product.minimal_form}
        videoUrl={product.scroll_video?.videoUrl}
        youtubeLink={product.scroll_video?.youtubeUrl}
        />
      <VideoTest videoData={product.video} />
      <ProductExperience data={product.experience_section} />
      <ProductBluePrint data={product.blue_print_section} />
      <ProductCards data={product.details_section} />
      <ProductFullWidthSlider data={product.projects_carousel} />
      <ProductAccessories data={product.accessories_section} />
      <ProductDetailFullWidthSlider data={product.models_section} />
      <FooterV1 />

      {/* ✅ OTP Verification Popup */}
      <DownloadPopup
        showPopup={showPopup}
        setShowPopup={setShowPopup}
        pdfUrl={product.hero?.pdf}
        title={product.hero?.tag}
        />
    </section>
        </>
  );
};

export default ProductPage;
