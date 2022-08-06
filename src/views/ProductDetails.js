import React from 'react'
import { Container } from 'react-bootstrap'
import PageHeader from '../components/Global/PageHeader/PageHeader'
import TopProducts from '../components/Global/TopProducts/TopProducts'
import ProductOperations from '../components/ProductDetails/ProductOperations/ProductOperations'
import ProductView from '../components/ProductDetails/ProductView/ProductView'
import { useTranslation } from 'react-i18next'
import {motion} from 'framer-motion'
import useSrollToTop from 'hooks/useSrollToTop'

function ProductDetails() {
  const {t} =useTranslation()
  useSrollToTop()
  return (
    <motion.div 
    init={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}>
        <PageHeader title={t('shop_single')}/>
        <Container>
            <ProductView/>
            <ProductOperations/>
            <TopProducts/>
        </Container>
    </motion.div>
  )
}

export default ProductDetails