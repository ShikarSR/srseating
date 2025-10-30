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
  );
};

export default ProductPage;
