import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CategoryFIlter from '../Global/CategoryFIlter/CategoryFIlter'
import Product from '../Global/Product/Product'
import styles from "./ShopCategoriesComp.module.css"
import { useTranslation } from 'react-i18next'
import TopProducts from '../Global/TopProducts/TopProducts'
function ShopCategoriesComp() {
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
    <section id={styles['shop-categories']}>
        <Container>
            <Row>
                <Col lg="3" md='4'>
                    <div className={styles['shop-categories__filters-container']}>
                        <div className={styles['shop-categories__filter-container']}>
                            <CategoryFIlter/>
                            <CategoryFIlter/>
                            <CategoryFIlter/>
                        </div>
                    </div>
                </Col>
                <Col lg="9" md='8'>
                    <div className={styles['shop-categories__product-container']}>
                        <div className={styles["shop-categories__products"]}>
                            <Row>
                                {
                                    products && products.map(product=>(
                                            <Col lg='4' md='6' sm='4' xs='6' className='mx-auto' key={product.id}>
                                                <Product products={product}/>
                                            </Col>
                                    ))
                                }
                            </Row>

                        </div>
                    </div>
                </Col>
            </Row>
            <TopProducts/>
        </Container>
    </section>
  )
}

export default ShopCategoriesComp