import React from 'react'
import AddCoupon from '../components/Cart/AddCoupon/AddCoupon'
import CartComp from '../components/Cart/CartComp/CartComp'
import CartProcced from '../components/Cart/CartProcced/CartProcced'
import PageHeader from '../components/Global/PageHeader/PageHeader'
// import { useTranslation} from 
import { useTranslation } from 'react-i18next'
import {motion} from 'framer-motion'
import useSrollToTop from 'hooks/useSrollToTop'

function Cart() {
  const {t} =useTranslation()
  useSrollToTop()
  return (
    <motion.div 
    init={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}>
        <PageHeader title={t('Shopping_cart')}/>
        <CartComp/>
        <AddCoupon/>
        <CartProcced/>
    </motion.div>
  )
}

export default Cart