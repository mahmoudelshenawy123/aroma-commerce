import React from 'react'
import PageHeader from '../components/Global/PageHeader/PageHeader'
import { useTranslation } from 'react-i18next'
import {motion} from 'framer-motion'
import useSrollToTop from 'hooks/useSrollToTop'
import CheckOutRegister from 'components/CheckOut/CheckOutRegister/CheckOutRegister'
import { Container } from 'react-bootstrap'
import HaveACoupon from 'components/CheckOut/HaveACoupon/HaveACoupon'
import BillingDetails from 'components/CheckOut/BillingDetails/BillingDetails'

  
function CheckOut() {
  const {t} =useTranslation()
  useSrollToTop()
  return (
    <motion.div 
    init={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}>
        <PageHeader title={t('product_checkOut')}/>
        <Container>
          <CheckOutRegister/>
          <HaveACoupon/>
          <BillingDetails/>

        </Container>
    </motion.div>
  )
}

export default CheckOut