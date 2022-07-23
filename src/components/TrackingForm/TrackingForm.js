import React from 'react'
import { Container } from 'react-bootstrap'
import styles from'./TrackingForm.module.css'
import { useTranslation } from 'react-i18next'

function TrackingForm() {
  const {t} =useTranslation()
  return (
    <section id={styles["tracking"]}>
        <Container>
            <p className={styles["tracking__desc"]}>{t('to_track')}</p>
            <form className={styles['tracking__form']}>
                <input type="text" className={styles['tracking__input']} placeholder={t('order_id')}/>
                <input type="text" className={styles['tracking__input']} placeholder={t('billing_email_address')}/>
                <input type="submit" className={styles["tracking__input-submit"]} value={t('track_order')}/>
            </form>
        </Container>
    </section>
  )
}

export default TrackingForm