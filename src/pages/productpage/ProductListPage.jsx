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

const ProductListPage = () => {
  return (
    <section className='product_list_page'>
      <Navbar/>
        <ProductListHeader/>
        <ProductYears/>
        <ProductCenterImage/>
        <ProductFAQ/>
        <ProductListFixedBottom/>
        <FooterV1/>
    </section>
  )
}

export default ProductListPage