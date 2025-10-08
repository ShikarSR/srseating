import React from 'react';
import Animation from '../animation/Animation';
import { Link } from 'react-router-dom';

const ProductBluePrint = ({ data }) => {
  return (
    <section className='blue_print_sec'>
      <div className="space"></div>
      <div className="banner-style-one">
        <div className="container">
          <div className="content sub_heading">
            <div className="row align-center">
              <div className="col-xl-12 col-lg-12 ">
                <div className="information text-center">
                  <Animation className='animate__animated animate__fadeInUp' delay='600ms' duration="400ms">
                    <h4>{data.label}</h4>
                  </Animation>
                  <Animation className='animate__animated animate__fadeInUp' delay='500ms' duration="400ms">
                    <h1 className='font_64'>{data.headline}</h1>
                  </Animation>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container blue_print_sec" style={{ backgroundColor: "#F7F7F7" }}>
          <div className="blue_print_img_wrap">
            <img src={data.image} alt="" />
          </div>

          <div className="blue_print_box_wrap">
            {data.specs.map((item, idx) => (
              <div className="print_box" key={idx}>
                <h4 className='font_38'>{item.value}</h4>
                <p>{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="global_btn">
          <button className="sr-btn">
            <Link className="font_22" to="/contact-us" >
              <span className="btn-text">{data.cta_text}</span>
              <span className="arrow">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                  <path d="M471.1 297.4C483.6 309.9 483.6 330.2 471.1 342.7L279.1 534.7C266.6 547.2 246.3 547.2 233.8 534.7C221.3 522.2 221.3 501.9 233.8 489.4L403.2 320L233.9 150.6C221.4 138.1 221.4 117.8 233.9 105.3C246.4 92.8 266.7 92.8 279.2 105.3L471.2 297.3z" />
                </svg>
              </span>
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductBluePrint;
