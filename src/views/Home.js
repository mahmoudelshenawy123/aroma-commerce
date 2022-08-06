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
import {motion} from 'framer-motion'
import useSrollToTop from 'hooks/useSrollToTop'
function Home() {
  useSrollToTop()
  return (
    <motion.div 
    init={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}>

        {/* <Loading/> */}
        <Header/>
        <Categories/>
        <TendingProducts/>
        <CartSales/>
        <BestSellers/>
        <News/>
        <SubScribe/>
    </motion.div>
  )
}

export default Home