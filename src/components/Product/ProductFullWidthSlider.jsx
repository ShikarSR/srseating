import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Autoplay, Pagination, Navigation } from "swiper/modules";
import ProductList from "@/assets/jsonData/product/productlist/ProductDetailsData.json";
import ProductSlider from "../Product/ProductSlider";

// Use either `data` (already sliced projects object) OR a product id
const ProductFullWidthSlider = ({ sectionClass, data, productId = 1 }) => {
  // 1) Get projects array
  const projects =
    // if parent already passed the projects object
    data?.projects ??
    data?.projects_carousel?.projects ??
    // else, find the product by id in the file and read its projects
    (ProductList.find(p => p.id === Number(productId))?.projects_carousel?.projects || []);

  
    const sliderSettings = {
        // Optional parameters
        loop: true,
        freeMode: true,
        grabCursor: true,
        slidesPerView: 1,
        spaceBetween: 18,
        centeredSlides: true, 
        autoplay: true,
            center: true,
            delay:44444,
        loopAdditionalSlides: 1,

        // pagination
        pagination: {
            el: '.project-pagination',
            type: 'fraction',
            clickable: true,
        },
        // Navigation arrows
        navigation: {
            nextEl: ".project-button-next",
            prevEl: ".project-button-prev"
        },
        breakpoints: {
            575: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 1.2,
            },
            1024: {
                slidesPerView: 1.2,

            },
            1200: {
                slidesPerView: 1.2,
            },
             1440: {
              slidesPerView: 1.2, 
                //  centeredSlides: false, 
            },
        },
    }


  return (
    <>
      <div className="space" />
      <div className={`gallery-style-one-area product_fullwidth_slider position-relative ${sectionClass || ""}`}>
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12">
              <div className="site-heading text-center">
                <h4 className="sub-title sr_btn">Projects</h4>
                <h2 className="font_64">Our Work. Their Experience.</h2>
              </div>
            </div>
            <div className="col-xl-6 col-lg-3">
              <div className="project-navigation-items">
                <div className="project-swiper-nav">
                  <div className="project-pagination" />
                  <div className="project-button-prev" />
                  <div className="project-button-next" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fill">
          <div className="row">
            <Swiper
              {...sliderSettings}
              className="gallery-style-one-carousel swiper"
              modules={[Keyboard, Autoplay, Pagination, Navigation]}
            >
              {/* DO NOT add your own .swiper-wrapper here */}
              {projects.map(item => (
                <SwiperSlide key={item.id}>
                  <ProductSlider gallery={item} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductFullWidthSlider;
