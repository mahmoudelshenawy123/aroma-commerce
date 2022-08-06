import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import styles from './BillingDetails.module.css'
function BillingDetails() {
  const {t} =useTranslation()
  return (
    <section className={styles['check-out__details']}>
      <Row>
        <Col lg='8'>
          <div className={styles['check-out__billing-cont']}>
            <h2 className={styles['check-out__billing-title']}>{t('billing_details')}</h2>
            <form className={styles['check-out__billing-form']}>
              <input type='text' placeholder='' className={styles['check-out__billing-input']}/>
              <input type='text' placeholder='' className={styles['check-out__billing-input']}/>
              <input type='text' placeholder='' className={styles['check-out__billing-input']}/>
              <input type='text' placeholder='' className={styles['check-out__billing-input']}/>
              <input type='text' placeholder='' className={styles['check-out__billing-input']}/>
              <input type='text' placeholder='' className={styles['check-out__billing-input']}/>
              <input type='text' placeholder='' className={styles['check-out__billing-input']}/>
              <h3 className={styles['check-out__billing-title']}>{t('billing_details')}</h3>
              <textarea className={`${styles['check-out__billing-input']} ${styles['check-out__billing-input--height']}`}></textarea>
            </form>

          </div>
        </Col>
        <Col lg='4'>
          <div className={styles['check-out__order-cont']}>
            <h3 className={`${styles['check-out__billing-title']} ${styles['check-out__billing-title--margin']}`}>{t('your_order')}</h3>
            <table className={`${styles['check-out__billing-table']} table`}>
              <thead>
                <tr>
                  <th>{t('product')}</th>
                  <th></th>
                  <th>{t('total')}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{t('pixelstore')}</td>
                  <td>X02</td>
                  <td>$720.00</td>
                </tr>
                <tr>
                  <td>{t('pixelstore')}</td>
                  <td>X02</td>
                  <td>$720.00</td>
                </tr>
                <tr>
                  <td>{t('pixelstore')}</td>
                  <td>X02</td>
                  <td>$720.00</td>
                </tr>
                <tr>
                  <th  colSpan="2">{t('subtotal')}</th>
                  <td>$2160.00</td>
                </tr>
                <tr>
                  <th colSpan="2">{t('shipping')}</th>
                  <td>{t('flat_rate')}: $50.00</td>
                </tr>
                <tr>
                  <th colSpan="2">{t('total')}</th>
                  <td>$2160.00</td>
                </tr>
              </tbody>
            </table>

            <button className={styles['check-out__billing-submit']}>{t('proceed_to_paypal')}</button>
          </div>
        </Col>
      </Row>
    </section>
  )
}

export default BillingDetails