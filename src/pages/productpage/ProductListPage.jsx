import FooterV1 from '@/components/footer/FooterV1'
import HeaderV1 from '@/components/header/HeaderV1'
import Navbar from '@/components/HeaderNav/Navbar'
import ProductCenterImage from '@/components/Product/ProductList/ProductCenterImage'
import ProductFAQ from '@/components/Product/ProductList/ProductFAQ'
import ProductListFixedBottom from '@/components/Product/ProductList/ProductListFixedBottom'
import ProductListFullWidthSlider from '@/components/Product/ProductList/ProductListFullWidthSlider'
import ProductListHeader from '@/components/Product/ProductList/ProductListHeader'
import ProductYears from '@/components/Product/ProductList/ProductYears'
import React from 'react'
import {Helmet} from 'react-helmet'
const ProductListPage = () => {
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
    <section className='product_list_page'>
      <Navbar/>
        <ProductListHeader/>
        <ProductYears/>
        <ProductCenterImage/>
        <ProductFAQ/>
        <ProductListFixedBottom/>
        <FooterV1/>
    </section>
    </>
  )
}

export default ProductListPage