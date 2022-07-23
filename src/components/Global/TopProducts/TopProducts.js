import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import ProductSectionHeading from '../ProductSectionHeading/ProductSectionHeading'
import styles from './TopProducts.module.css'

    import { useTranslation } from 'react-i18next'

// https://i.ibb.co/HCgnjvS/top-Product1.webp
// https://i.ibb.co/724wqnK/top-Product2.webp
// https://i.ibb.co/VJpR9tD/top-Product3.png
// https://i.ibb.co/VpR0kRv/top-Product4.webp
// https://i.ibb.co/3Mmx7Rd/top-Product5.webp
// https://i.ibb.co/8zHPLwN/top-Product6.webp
// https://i.ibb.co/GkZPfFt/top-Product7.webp
// https://i.ibb.co/h9d0bFJ/top-Product8.webp
// https://i.ibb.co/8XvjGXs/top-Product9.webp

function TopProducts() {
    const {t} =useTranslation()

    let products=[        
        [
            {id:1,image:'https://i.ibb.co/HCgnjvS/top-Product1.webp',title:t('gray_coffee_cup'),price:170},
            {id:2,image:'https://i.ibb.co/724wqnK/top-Product2.webp',title:t('gray_coffee_cup'),price:170},
            {id:3,image:'https://i.ibb.co/VJpR9tD/top-Product3.png',title:t('gray_coffee_cup'),price:170},
        ],
        [
            {id:4,image:'https://i.ibb.co/VpR0kRv/top-Product4.webp',title:t('gray_coffee_cup'),price:170},
            {id:5,image:'https://i.ibb.co/3Mmx7Rd/top-Product5.webp',title:t('gray_coffee_cup'),price:170},
            {id:6,image:'https://i.ibb.co/8zHPLwN/top-Product6.webp',title:t('gray_coffee_cup'),price:170},
        ],
        [
            {id:7,image:'https://i.ibb.co/GkZPfFt/top-Product7.webp',title:t('gray_coffee_cup'),price:170},
            {id:8,image:'https://i.ibb.co/h9d0bFJ/top-Product8.webp',title:t('gray_coffee_cup'),price:170},
            {id:9,image:'https://i.ibb.co/8XvjGXs/top-Product9.webp',title:t('gray_coffee_cup'),price:170},
        ],
        [
            {id:10,image:'https://i.ibb.co/GkZPfFt/top-Product7.webp',title:t('gray_coffee_cup'),price:170},
            {id:11,image:'https://i.ibb.co/h9d0bFJ/top-Product8.webp',title:t('gray_coffee_cup'),price:170},
            {id:12,image:'https://i.ibb.co/8XvjGXs/top-Product9.webp',title:t('gray_coffee_cup'),price:170},
        ]
    ]
  return (
    <>
    <section id={styles["top-product"]}>

        <Container>
        <ProductSectionHeading desc={t("popular_item_in_the_market")}  title={t("top")} spanTitle={t("product")}/>
            <Row>
                {
                    products && products.map((cat,index)=>(
                    <Col lg='3' md="4" sm='6' xs='12' className="mx-auto mb-4" key={index}>
                        <div className={styles['product__container']}>
                            {
                                cat && cat.map(product=>(
                                    <div className={styles['product__info-cont']} key={product.title +product.id}>
                                        <img src={product.image} alt={product.title} className={styles['product__info-img']}/>
                                        <div className={styles['product__info-details']}>
                                            <NavLink to='/' className={styles['product__info-title']}>{product.title}</NavLink>
                                            <p className={styles['product__info-price']}>$ {product.price}</p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </Col>
                    ))
                }
            </Row>
        </Container>
        </section>
    </>
  )
}

export default TopProducts