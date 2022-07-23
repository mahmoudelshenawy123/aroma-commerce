import React from 'react'
// import Footer from '../components/Global/Footer/Footer'
// import NavbarMenu from '../components/Global/mainNavBar/NavbarMenu'
// import SideNavBar from '../components/Global/sideNavBar/SideNavBar'

import BestSellers from '../components/Home/BestSellers/BestSellers'
import News from '../components/Home/News/News'
import Categories from '../components/Home/Categories/Categories'
import CartSales from '../components/Home/CartSale/CartSale'
import SubScribe from '../components/Home/SubScribe/SubScribe'
import TendingProducts from '../components/Home/TendingProducts/TendingProducts'
import Header from 'components/Home/header/Header'
import Loading from 'components/Global/loading/Loading'

function Home() {
  return (
    <>

        {/* <Loading/> */}
        <Header/>
        <Categories/>
        <TendingProducts/>
        <CartSales/>
        <BestSellers/>
        <News/>
        <SubScribe/>
    </>
  )
}

export default Home