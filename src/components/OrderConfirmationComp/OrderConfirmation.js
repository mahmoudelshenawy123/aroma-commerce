import { t } from 'i18next'
import React from 'react'
import { Col, Container, Row, Table } from 'react-bootstrap'
import styles from './OrderConfirmation.module.css'
import { useTranslation } from 'react-i18next'
function OrderConfirmationComp() {
    const {t} =useTranslation()

  return (
    <section id={styles['order-confirmaition']}>
        <Container>
            <h2 className={styles['order-confirmaition__heading']}>{t('thank_you_order')}</h2>
            <Row>
                <Col lg='4'>
                    <div className={styles['order-confirmaition__content-container']}>
                        <h2 className={styles['order-confirmaition__content-heading']}>{t('order_info')}</h2>
                        <ul className={styles['order-confirmaition__content-list']}>
                            <li className={styles['order-confirmaition__content-item']}>
                                <p className={styles['order-confirmaition__content-desc']}>{t('order_number')}</p>
                                :<p className={styles['order-confirmaition__content-value']}>60235</p>
                            </li>
                            <li className={styles['order-confirmaition__content-item']}>
                                <p className={styles['order-confirmaition__content-desc']}>{t('date')}</p>
                                :<p className={styles['order-confirmaition__content-value']}>Oct 03, 2017</p>
                            </li>
                            <li className={styles['order-confirmaition__content-item']}>
                                <p className={styles['order-confirmaition__content-desc']}>{t('total')}</p>
                                :<p className={styles['order-confirmaition__content-value']}>USD 2210</p>
                            </li>
                            <li className={styles['order-confirmaition__content-item']}>
                                <p className={styles['order-confirmaition__content-desc']}>{t('payment_method')}</p>
                                :<p className={styles['order-confirmaition__content-value']}>{t('check_payments')}</p>
                            </li>
                        </ul>
                    </div>
                </Col>
                <Col lg='4'>
                    <div className={styles['order-confirmaition__content-container']}>
                        <h2 className={styles['order-confirmaition__content-heading']}>{t('billing_address')}</h2>
                        <ul className={styles['order-confirmaition__content-list']}>
                            <li className={styles['order-confirmaition__content-item']}>
                                <p className={styles['order-confirmaition__content-desc']}>{t('street')}</p>
                                :<p className={styles['order-confirmaition__content-value']}>{t('panthapath')}</p>
                            </li>
                            <li className={styles['order-confirmaition__content-item']}>
                                <p className={styles['order-confirmaition__content-desc']}>{t('city')}</p>
                                :<p className={styles['order-confirmaition__content-value']}>{t('dhaka')}</p>
                            </li>
                            <li className={styles['order-confirmaition__content-item']}>
                                <p className={styles['order-confirmaition__content-desc']}>{t('country')}</p>
                                :<p className={styles['order-confirmaition__content-value']}>{t('bangladesh')}</p>
                            </li>
                            <li className={styles['order-confirmaition__content-item']}>
                                <p className={styles['order-confirmaition__content-desc']}>{t('postcode')}</p>
                                :<p className={styles['order-confirmaition__content-value']}>1205</p>
                            </li>
                        </ul>
                    </div>
                </Col>
                <Col lg='4'>
                    <div className={styles['order-confirmaition__content-container']}>
                        <h2 className={styles['order-confirmaition__content-heading']}>{t('shipping_address')}</h2>
                        <ul className={styles['order-confirmaition__content-list']}>
                            <li className={styles['order-confirmaition__content-item']}>
                                <p className={styles['order-confirmaition__content-desc']}>{t('street')}</p>
                                :<p className={styles['order-confirmaition__content-value']}>{t('panthapath')}</p>
                            </li>
                            <li className={styles['order-confirmaition__content-item']}>
                                <p className={styles['order-confirmaition__content-desc']}>{t('city')}</p>
                                :<p className={styles['order-confirmaition__content-value']}>{t('dhaka')}</p>
                            </li>
                            <li className={styles['order-confirmaition__content-item']}>
                                <p className={styles['order-confirmaition__content-desc']}>{t('country')}</p>
                                :<p className={styles['order-confirmaition__content-value']}>{t('bangladesh')}</p>
                            </li>
                            <li className={styles['order-confirmaition__content-item']}>
                                <p className={styles['order-confirmaition__content-desc']}>{t('postcode')}</p>
                                :<p className={styles['order-confirmaition__content-value']}>1205</p>
                            </li>
                        </ul>
                    </div>
                </Col>
                <Col lg='12'>
                    <div className={`${styles['order-confirmaition__content-container']} ${styles['order-confirmaition__content-container--table']}`}>
                        <h2 className={styles['order-confirmaition__content-heading']}>{t('order_details')}</h2>
                        <Table responsive className={styles['order-confirmaition__table']}>
                            <thead>
                                <tr>
                                    <th>{t('product')}</th>
                                    <th>{t('quantity')}</th>
                                    <th>{t('total')}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                  <td className={styles['order-confirmaition__table--color']}>{t('pixelstore')}</td>
                                  <td>X 02</td>
                                  <td className={styles['order-confirmaition__table--color']}>$720.00</td>
                                </tr>
                                <tr>
                                  <td className={styles['order-confirmaition__table--color']}>{t('pixelstore')}</td>
                                  <td>X 02</td>
                                  <td className={styles['order-confirmaition__table--color']}>$720.00</td>
                                </tr>
                                <tr>
                                  <td className={styles['order-confirmaition__table--color']}>{t('pixelstore')}</td>
                                  <td>X 02</td>
                                  <td className={styles['order-confirmaition__table--color']}>$720.00</td>
                                </tr>
                            </tbody>
                            <tfoot>
                              <tr>
                                <td colspan='2'>{t('subtotal')}</td>
                                <td className={styles['order-confirmaition__table--color']}>$2160.00</td>
                              </tr>
                              <tr>
                                <td colspan='2'>{t('shipping')}</td>
                                <td className={styles['order-confirmaition__table--color']}>{t('flat_rate')}: $50.00</td>
                              </tr>
                              <tr>
                                <td colspan='2'>{t('total')}</td>
                                <td>$2210.00</td>
                              </tr>
                            </tfoot>
                        </Table>

                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default OrderConfirmationComp