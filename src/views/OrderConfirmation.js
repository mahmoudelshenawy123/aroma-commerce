import React from 'react'
import PageHeader from '../components/Global/PageHeader/PageHeader'
import OrderConfirmationComp from '../components/OrderConfirmationComp/OrderConfirmation'
import { useTranslation } from 'react-i18next'
import {motion} from 'framer-motion'

function OrderConfirmation() {
  const {t} =useTranslation()
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