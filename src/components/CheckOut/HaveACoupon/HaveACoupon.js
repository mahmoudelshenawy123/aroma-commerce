import React from 'react'
import { useTranslation } from 'react-i18next'
import styles from './HaveACoupon.module.css'
function HaveACoupon() {
    const {t} =useTranslation()
  return (
    <section className={styles['check-out__have-coupon']}>
        <div className={styles['check-out__have-coupon-title-cont']}>
            <h2 className={styles['check-out__have-coupon-title']}>{t('have_a_coupon')}</h2>
        </div>
        <form>
            <div className={styles['check-out__have-coupon-input-cont']}>
                <input type="text" placeholder={t('enter_coupon_code')} className={styles['check-out__have-coupon-input']}/>
                <input type='submit' value={t('apply_coupon')} className={styles['check-out__have-coupon-submit']}/>
            </div>
        </form>
    </section>

  )
}

export default HaveACoupon