import React from 'react'
import { Container } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import styles from './CartSale.module.css'
import { useTranslation } from 'react-i18next'
    // const {t} =useTranslation()

function CartSale() {
  const {t} =useTranslation()
  return (
    <section id={styles["cart-sale"]}>
        <Container className={styles['cart-sale__container']}>
            <div className={styles["cart-sale__cont"]}>
                <h2 className={styles["cart-sale__title"]}>{t('up_to_50_Off')}</h2>
                <h4 className={styles["cart-sale__info"]}>{t('winter_sale')}</h4>
                <p className={styles["cart-sale__para"]}>{t("him_she'd_let_them_sixth_saw_light")}</p>
                <NavLink to='/Cart' className={styles['cart-sale__shop-now']}>{t('shop_now')}</NavLink>
            </div>
        </Container>
    </section>
  )
}

export default CartSale