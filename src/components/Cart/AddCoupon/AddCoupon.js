import React from 'react'
import { Container } from 'react-bootstrap'
import styles from './AddCoupon.module.css'
import { useTranslation } from 'react-i18next'

function AddCoupon() {
    const {t} =useTranslation()
  return (
    <div className={styles["cart-coupon"]}>
        <Container>
            <div className={styles['cart-coupon__cont']}>
                <form className={styles['cart-coupon__form']}>
                    <input type='text' className={styles['cart-coupon__input']} placeholder={t('coupon_code')}/>
                    <inpu type='submit' className={styles['cart-coupon__apply-coupon']}>{t('apply')}</inpu>
                </form>
            </div>
            <div className={styles['cart-coupon__total-price-cont']}>
                <div className={styles['cart-coupon__total-price']}>
                    <p className={styles['cart-coupon__total-price-title']}>{t('subtotal')} :</p>
                    <p className={styles['cart-coupon__total-price-num']}>$2160.00</p>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default AddCoupon