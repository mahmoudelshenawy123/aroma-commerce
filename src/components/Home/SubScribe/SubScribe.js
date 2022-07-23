import React from 'react'
import { Container } from 'react-bootstrap'
import styles from './SubScribe.module.css'
import { useTranslation } from 'react-i18next'

function SubScribe() {
  const {t} =useTranslation()
  return (
    <section id={styles["subscribe"]}>
        <Container>
            <div className={styles["subscribe__cont"]}>
                <h2 className={styles['subscribe__cont-heading']}>{t('get_update')}</h2>
                <p className={styles['subscribe__cont-desc']}>{t('bearing_void')}</p>
                <form className={styles['subscribe__form']}>
                    <input type='text' className={styles["subscribe__form-email"]} placeholder={t('your_email_address')}/>
                    <input type='submit' className={styles["subscribe__form-submit"]} value={t('subscribe_now')}/>
                </form>
            </div>
        </Container>
    </section>
  )
}

export default SubScribe