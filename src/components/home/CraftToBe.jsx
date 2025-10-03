import React from 'react'
import ProductYears from '../Product/ProductList/ProductYears'
import { Link } from 'react-router-dom'

const CraftToBe = () => {
  return (
    <div className='banner-style-one-area craft_tobe'>
      <div className='container'>

        <h2 className='font_64 text-center'>Crafted To Be Felt, <br /> Not Noticed.</h2>
        <p className='font_22'>
            Before the lights dim and the screen flickers to life, comfort begins its quiet performance.  At SR Seating, we design chairs that welcome the body and calm the mind, so your audience can disappear into the world you’ve created.  Over 30+ Years and more than 6 Lakhs+ seats later, our mission remains simple:   
   
            <strong className='d-block'>Design Seats That People Want to Return To.</strong> 
        </p>
        <ProductYears/>
    
    <div className="global_btn">
            <button class="sr-btn">
                <Link className="font_22" to="/our-story">
            <span class="btn-text">About SR Seating</span>
            <span class="arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M471.1 297.4C483.6 309.9 483.6 330.2 471.1 342.7L279.1 534.7C266.6 547.2 246.3 547.2 233.8 534.7C221.3 522.2 221.3 501.9 233.8 489.4L403.2 320L233.9 150.6C221.4 138.1 221.4 117.8 233.9 105.3C246.4 92.8 266.7 92.8 279.2 105.3L471.2 297.3z"/></svg></span>
            </Link>
            </button>
    </div>

    </div>
    </div>
  )
}

export default CraftToBe