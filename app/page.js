import React from 'react'
import Header from './Components/Header'
import Products from './Components/Products'
import Banner from './Components/Banner'
import Categories from './Components/Categories'
import TrendingProducts from './Components/TrendingProducts'
import DiscountBanner from './Components/DiscountBanner'
import Footer from './Components/Footer'

const page = () => {
  return (
    <>
    <Header />
    <Banner />
    <TrendingProducts />
    <DiscountBanner />
    <Categories />
    <Footer />
    </>
  )
}

export default page