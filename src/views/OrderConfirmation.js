import React from 'react'
import PageHeader from '../components/Global/PageHeader/PageHeader'
import OrderConfirmationComp from '../components/OrderConfirmationComp/OrderConfirmation'
import { useTranslation } from 'react-i18next'
import {motion} from 'framer-motion'
import useSrollToTop from 'hooks/useSrollToTop'

function OrderConfirmation() {
  const {t} =useTranslation()
  useSrollToTop()
  return (
    <motion.div 
    init={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}>
        <PageHeader title={t('order_confirmation')}/>
        <OrderConfirmationComp/>
    </motion.div>
  )
}

export default OrderConfirmation