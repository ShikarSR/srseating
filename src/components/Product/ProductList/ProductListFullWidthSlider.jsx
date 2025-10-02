import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Autoplay, Pagination, Navigation } from 'swiper/modules';
import ProductListSlider from './ProductListSlider';
import AllProductList from '../../../assets/jsonData/product/productlist/ProductList.json';
import Dropdown from 'react-bootstrap/Dropdown'; // <-- import react-bootstrap Dropdown

const ProductListFullWidthSlider = ({ sectionClass }) => {
  const [viewType, setViewType] = useState('grid'); // grid or list

  const sliderSettings = {
    loop: true,
    freeMode: true,
    grabCursor: true,
    slidesPerView: 1,
    spaceBetween: 18,
    centeredSlides: false,
    autoplay: true,
    center: true,
    loopAdditionalSlides: 1,
    pagination: {
      el: '.project-pagination',
      type: 'fraction',
      clickable: true,
    },
    navigation: {
      nextEl: ".project-button-next",
      prevEl: ".project-button-prev"
    },
    breakpoints: {
      575: { slidesPerView: 1 },
      768: { slidesPerView: 1 },
      1024: { slidesPerView: 1 },
           1200: { slidesPerView: 1 },

     1300: { slidesPerView: 1 },

      1400: { slidesPerView: 2},
    },
  };

  return (
    <>
      <div className={`gallery-style-one-area   product_fullwidth_slider allproduct_list position-relative ${sectionClass ? sectionClass : ""}`}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col">
              {/* React-Bootstrap Dropdown for Grid/List View */}
            
            </div>
            <div className="col-xl-12 col-lg-3">
              <div className="project-navigation-items">

                  <Dropdown className='view_btn'>
                <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                  {viewType === 'grid' ? 'Scroll View' : 'List View'}
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
                    </svg>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item
                    active={viewType === 'grid'}
                    onClick={() => setViewType('grid')}
                  >Scroll View</Dropdown.Item>
                  <Dropdown.Item
                    active={viewType === 'list'}
                    onClick={() => setViewType('list')}
                  >List View</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

                {viewType === 'grid' && (
                  <div className="project-swiper-nav">
                    <div className="project-pagination" />
                    <div className="project-button-prev" />
                    <div className="project-button-next" />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll View (Swiper) */}
        {viewType === 'grid' && (
          <div className="container">
            <div className="row">
              <div className='col-12 col-xxl-12 col-xl-12 col-lg-12 col-md-12'>
              <Swiper
                {...sliderSettings}
                className="gallery-style-one-carousel swiper"
                modules={[Keyboard, Pagination, Navigation]}
              >
                {AllProductList.map(allproduct =>
                  <SwiperSlide key={allproduct.id}>
                    <ProductListSlider allproduct={allproduct} />
                  </SwiperSlide>
                )}
              </Swiper>
                </div>
            </div>
          </div>
        )}

        {/* List View */}
        {viewType === 'list' && (
          <div className="container">
            <div className="row listview_slider">
              {AllProductList.map(allproduct => (
                <div className="col-6 col-xxl-6 col-xl-12 col-lg-12 col-md-12" key={allproduct.id} >
                  <ProductListSlider allproduct={allproduct} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="space"></div>
    </>
  );
};

export default ProductListFullWidthSlider;
