import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import styles from './ProductView.module.css'
import {ReactComponent as CartIcon} from 'assets/icons/cart.svg'
import { ReactComponent as HeartIcon } from 'assets/icons/heart.svg'
import src from 'assets/imgs/productDetails.jpg'
import { useTranslation } from 'react-i18next'

function ProductView() {
    const {t} =useTranslation()
  return (
    <section id={styles['product-view']}>
        <Container>
            <Row>
                <Col lg='6'>
                    <div className={styles['product-view__img-container']}>
                        <img src={src} alt="product" className={styles['product-view__img']}/>
                    </div>
                </Col>
                <Col lg='6'>
                    <div className={styles['product-view__info-cont']}>
                        <h1 className={styles['product-view__info-name']}>{t('faded')}</h1>
                        <p className={styles['product-view__info-price']}>$480.00</p>
                        <ul className={styles['product-view__info-features-list']}>
                            <li className={styles['product-view__info-features-item']}>
                                <p className={styles['product-view__info-feature']}>
                                    <span className={styles['product-view__info-feature-label']}>{t('category')}</span> 
                                    : {t('household')}
                                </p>
                            </li>
                            <li className={styles['product-view__info-features-item']}>
                                <p className={styles['product-view__info-feature']}>
                                    <span className={styles['product-view__info-feature-label']}>{t('availibility')}</span> 
                                    : {t('household')}
                                </p>
                            </li>
                        </ul>
                        <p className={styles['product-view__info-desc']}>
                            {t('mill')}
                        </p>
                        <div className={styles['product-view__add-to-cart-container']}>
                            <div className={styles['product-view__quantity-cont']}>
                                <label htmlFor='product-view__quantity-label-id' className={styles['product-view__quantity-label']}>{t('quantity')}</label>
                                <input type='number' className={styles['product-view__quantity-input']} id={styles['product-view__quantity-label-id']}/>
                            </div>
                            <button className={styles['product-view__add-to-cart']}>{t('add_to_cart')}</button>
                        </div>
                        <div className={styles['product-view__info-actions']}>
                            <button className={styles['product-view__info-action']}>
                                <HeartIcon className={styles['product-view__info-action-icon']}/>
                            </button>
                            <button className={styles['product-view__info-action']}>
                                <CartIcon className={styles['product-view__info-action-icon']}/>
                            </button>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default ProductView