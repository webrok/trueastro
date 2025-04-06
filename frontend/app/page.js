import React from 'react'
import HeroSlider from './component/HeroSlider'
import AstroProductsUI from './component/AstroProductsUI'
import Status from './component/Status'
import Header from './component/header/Header'
import Footer from './component/footer/Footer'
import Testimonials from './component/testimonial/Testimonials'
import Tabs from './component/ourexpert/Tabs'

const page = () => {
  return (
    <>
    <Header />
    <HeroSlider />
    <AstroProductsUI />
    <Status />
    <Tabs />
    <Testimonials />
    <Footer/>
    </>
  )
}

export default page
