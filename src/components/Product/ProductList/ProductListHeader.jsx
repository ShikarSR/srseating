import React from 'react'
import Animation from '../../animation/Animation';
import {Link} from 'react-router-dom'
import ProductListSlider from './ProductListSlider';
import ProductListFullWidthSlider from './ProductListFullWidthSlider';

const ProductListHeader = () => {
  return (
    <>
         <div className="banner-style-one-area productlist_sec overflow-hidden position-static">
            <div className="shape-blury" />
                <div className="banner-style-one">
                    <div className="container">
                        <div className="content">
                            <div className="row align-center">
                                <div className="col-xl-7 col-lg-7 pr-50 pr-md-15 pr-xs-15">
                                    <div className="information">
                                    
                                        <Animation className='animate__animated animate__fadeInUp' delay='2000ms' duration="400ms">
                                            <h4>Products</h4>
                                        </Animation>
                                        <Animation className=' animate__animated animate__fadeInUp' delay='500ms' duration="400ms">
                                            <h2 className='font_64'>The Art of Seating, <br/>Perfected for You. </h2>
                                        </Animation>
                                        <Animation className='animate__animated animate__fadeInUp' delay='900ms' duration="400ms">
                                            <p className='font_28'>
                                               Every line, every layer, every material, thoughtfully chosen. 
                                            </p>
                                        </Animation>
                                      
                                    </div>
                                </div>
                               
                            </div>
                        </div>
                    </div>
                </div>

                <ProductListFullWidthSlider/>
            </div>  
    </>

    
  )
}

export default ProductListHeader