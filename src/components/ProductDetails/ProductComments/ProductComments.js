import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import styles from './ProductComments.module.css'
import user from 'assets/imgs/user1.png'
import { useTranslation } from 'react-i18next'

function ProductComments() {
    const {t} =useTranslation()
  return (
    <>
        <section id={styles["product-comments"]}>
            <Container>
                <Row>
                    <Col lg='6'>
                        <div className={styles['product-comments__container']}>
                            <div className={styles['product-comments__content']}>
                                <div className={styles["product-comments__user-info"]}>
                                    <img src={user} alt="user info" className={styles['product-comments__user-image']}/>
                                    <div className={styles['product-comments__user']}>
                                        <p className={styles['product-comments__user-name']}>{t('blake')}</p>
                                        <p className={styles['product-comments__time']}>{t('date-')}</p>
                                    </div>
                                    <button className={styles['product-comments__user-reply']}>{t('reply')}</button>
                                </div>
                                <p className={styles['product-comments__user-comment']}>
                                    {t('lorem')}
                                </p>
                            </div>
                            <div className={styles['product-comments__content']}>
                                <div className={styles["product-comments__user-info"]}>
                                    <img src={user} alt="user info" className={styles['product-comments__user-image']}/>
                                    <div className={styles['product-comments__user']}>
                                        <p className={styles['product-comments__user-name']}>{t('blake')}</p>
                                        <p className={styles['product-comments__time']}>{t('date-')}</p>
                                    </div>
                                    <button className={styles['product-comments__user-reply']}>{t('reply')}</button>
                                </div>
                                <p className={styles['product-comments__user-comment']}>
                                    {t('lorem')}
                                </p>
                            </div>
                            <div className={styles['product-comments__content']}>
                                <div className={styles["product-comments__user-info"]}>
                                    <img src={user} alt="user info" className={styles['product-comments__user-image']}/>
                                    <div className={styles['product-comments__user']}>
                                        <p className={styles['product-comments__user-name']}>{t('blake')}</p>
                                        <p className={styles['product-comments__time']}>{t('date-')}</p>
                                    </div>
                                    <button className={styles['product-comments__user-reply']}>{t('reply')}</button>
                                </div>
                                <p className={styles['product-comments__user-comment']}>
                                    {t('lorem')}
                                </p>
                            </div>
                      
                           
                        </div>
                    </Col>
                    <Col lg='6'>
                        <form className={styles['product-comments__add-comment-form']}>
                            <h4 className={styles['product-comments__add-comment-heading']}>{t('post_a_comment')}</h4>
                            <input type="text" className={styles['product-comments__add-comment-input']} placeholder={t('your_full_name')}/>
                            <input type="email" className={styles['product-comments__add-comment-input']} placeholder={t('email_address')}/>
                            <input type="number" className={styles['product-comments__add-comment-input']} placeholder={t('phone_number')}/>
                            <textarea className={`${styles['product-comments__add-comment-input']} ${styles['product-comments__add-comment--text-area']}`} placeholder={t('message')}></textarea>
                            <input type='submit' className={styles['product-comments__add-comment-submit']} value={t('submit_now')}/>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    </>
  )
}

export default ProductComments