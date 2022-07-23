import React from 'react'
import { Container } from 'react-bootstrap'
import Product from 'components/Global/Product/Product'
import ProductSectionHeading from 'components/Global/ProductSectionHeading/ProductSectionHeading'
import SwiperMultiCarousal from 'components/Global/Swiper/SwiperMultiCarousal'
import styles from './BestSellers.module.css'
import { useTranslation } from 'react-i18next'

function BestSellers() {
  const {t} =useTranslation()
    let products=[
        {id:1,name:t('iphone'),cat:t('accessories_items'),image:'https://i.ibb.co/F4CNQf9/product1.webp',price:'150'},
        {id:2,name:t('iphone'),cat:t('accessories_items'),image:'https://i.ibb.co/ZSKDTrV/product2.webp',price:'150'},
        {id:3,name:t('iphone'),cat:t('accessories_items'),image:'https://i.ibb.co/9G9m8dY/product3.webp',price:'150'},
        {id:4,name:t('iphone'),cat:t('accessories_items'),image:'https://i.ibb.co/9G9m8dY/product3.webp',price:'150'},
        {id:5,name:t('iphone'),cat:t('accessories_items'),image:'https://i.ibb.co/mHJdQZQ/product4.webp',price:'150'},
        {id:6,name:t('iphone'),cat:t('accessories_items'),image:'https://i.ibb.co/jLcmC2Y/product5.webp',price:'150'},
        {id:7,name:t('iphone'),cat:t('accessories_items'),image:'https://i.ibb.co/qWBqyBY/product6.webp',price:'150'},
        {id:8,name:t('iphone'),cat:t('accessories_items'),image:'https://i.ibb.co/KFXtg1W/product7.webp',price:'150'},
        {id:9,name:t('iphone'),cat:t('accessories_items'),image:'https://i.ibb.co/PgZ8cfX/product8.webp',price:'150'},
    ]
  return (
    <section id={styles["best-sellers"]}>
        <Container>
            <ProductSectionHeading desc={t('popular_item_in_the_market')} title={t('best')} spanTitle={t('seller')}/>
            <SwiperMultiCarousal products={products} comp={<Product/>}/>
        </Container>
    </section>
  )
}

export default BestSellers