import React from 'react'
import { Container } from 'react-bootstrap'
import PageHeader from '../components/Global/PageHeader/PageHeader'
import TopProducts from '../components/Global/TopProducts/TopProducts'
import ProductOperations from '../components/ProductDetails/ProductOperations/ProductOperations'
import ProductView from '../components/ProductDetails/ProductView/ProductView'
import { useTranslation } from 'react-i18next'

function ProductDetails() {
  const {t} =useTranslation()
  return (
    <>
        <PageHeader title={t('shop_single')}/>
        <Container>
          
            <ProductView/>
            <ProductOperations/>
            <TopProducts/>
        </Container>
    </>
  )
}

export default ProductDetails