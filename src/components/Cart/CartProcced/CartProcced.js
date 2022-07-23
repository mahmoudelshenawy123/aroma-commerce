import React from 'react'
import { Container } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import styles from './CartProcced.module.css'
import { useTranslation } from 'react-i18next'

function CartProcced() {
  const {t} =useTranslation()
  return (
    <div className={styles["cart-proceed"]}>
        <Container>
            <div className={styles['cart-proceed__cont']}>
                <NavLink to='/Shop-Categories' className={`${styles['cart-proceed__button']} ${styles['cart-proceed__button--continue']}`}>{t('continue_shopping')}</NavLink>
                <button className={`${styles['cart-proceed__button']} ${styles['cart-proceed__button--buy']}`} >{t('proceed_to_checkout')}</button>
            </div>
        </Container>
    </div>
  )
}

export default CartProcced