import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import styles from './Footer.module.css'
import { ReactComponent as LocationIcon} from 'assets/icons/locationArrow.svg'
import { ReactComponent as PhoneIcon} from 'assets/icons/phone.svg'
import { ReactComponent as MailIcon} from 'assets/icons/mail.svg'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

// https://i.ibb.co/094JHJ4/gallery1.webp
// https://i.ibb.co/sWbGTrM/gallery2.webp
// https://i.ibb.co/Tk02RCG/gallery3.webp
// https://i.ibb.co/tX5YyMp/gallery4.webp
// https://i.ibb.co/dM6Bcrz/gallery5.webp
// https://i.ibb.co/PT5PRTG/gallery6.webp
let images = ['https://i.ibb.co/094JHJ4/gallery1.webp','https://i.ibb.co/sWbGTrM/gallery2.webp','https://i.ibb.co/Tk02RCG/gallery3.webp','https://i.ibb.co/tX5YyMp/gallery4.webp','https://i.ibb.co/dM6Bcrz/gallery5.webp','https://i.ibb.co/PT5PRTG/gallery6.webp']
function Footer() {
    const {t} =useTranslation()
  return (
    <footer>
        <div className={styles['footer-top']}>
            <Container>
                <Row>
                    <Col lg='3' md="4" sm="6" xs="12" className='mx-auto mb-5'>
                        <div className={styles['footer__info-cont']}>
                            <h2 className={styles['footer__info-heading']}>{t('our_mission')}</h2>
                            <p className={styles['footer__info-title']}>{t("so_seed")}</p>
                            <p className={styles['footer__info-title']}>{t('so_seed_two')}</p>
                        </div>
                    </Col>
                    
                    <Col lg='3' md="4" sm="6" xs="6" className='mx-auto mb-5'>
                        <div className={styles['footer__quick-cont']}>
                            <h2 className={styles['footer__quick-heading']}>{t('quick_links')}</h2>
                            <ul className={styles["footer__quick-list"]}>
                                <li className={styles['footer__quick-items']}>
                                    <NavLink to='/' className={styles["footer__quick-link"]}>{t('home')}</NavLink>
                                </li>
                                <li className={styles['footer__quick-items']}>
                                    <NavLink to='/' className={styles["footer__quick-link"]}>{t('shop')}</NavLink>
                                </li>
                                <li className={styles['footer__quick-items']}>
                                    <NavLink to='/' className={styles["footer__quick-link"]}>{t('blog')}</NavLink>
                                </li>
                                <li className={styles['footer__quick-items']}>
                                    <NavLink to='/' className={styles["footer__quick-link"]}>{t('product')}</NavLink>
                                </li>
                                <li className={styles['footer__quick-items']}>
                                    <NavLink to='/' className={styles["footer__quick-link"]}>{t('brand')}</NavLink>
                                </li>
                                <li className={styles['footer__quick-items']}>
                                    <NavLink to='/' className={styles["footer__quick-link"]}>{t('contact')}</NavLink>
                                </li>
                            </ul>
                        </div>
                    </Col>

                    <Col lg='3' md="4" sm="6" xs="6" className='mx-auto mb-5'>
                        <div className={styles["footer__gallery-cont"]}>
                            <h2 className={styles['footer__gallery-heading']}>{t('gallery')}</h2>
                            <ul className={styles['footer__gallery-list']}>
                                {
                                    images && images.map((image,index)=>(
                                        <li className={styles["footer__gallery-items"]} key={image+index}>
                                            <img src={image} alt="gallery" className={styles['footer__gallery-img']}/>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </Col>

                    <Col lg='3' md="4" sm="6" xs="12" className='mx-auto mb-5'>
                        <div className={styles["footer__contact-us-cont"]}>
                            <h2 className={styles['footer__contact-us-heading']}>{t('contact_us')}</h2>
                            
                            <div className={styles["footer__contact-info-cont"]}>
                                <LocationIcon className={styles['footer__contact-info-icon']}/>
                                <div className={styles['footer__contact-info-content']}>
                                    <p className={styles['footer__contact-info-heading']}>{t('head_office')}</p>
                                    <p className={styles['footer__contact-info-para']}>{t('main_street')}</p>
                                </div>
                            </div>
                            
                            <div className={styles["footer__contact-info-cont"]}>
                                <PhoneIcon className={styles['footer__contact-info-icon']}/>
                                <div className={styles['footer__contact-info-content']}>
                                    <p className={styles['footer__contact-info-heading']}>{t('phone_number')}</p>
                                    <p className={styles['footer__contact-info-para']}>+123 456 7890</p>
                                    <p className={styles['footer__contact-info-para']}>+123 456 7890</p>
                                    </div>
                            </div>

                            <div className={styles["footer__contact-info-cont"]}>
                                <MailIcon className={styles['footer__contact-info-icon']}/>
                                <div className={styles['footer__contact-info-content']}>
                                    <p className={styles['footer__contact-info-heading']}>{t('email')}</p>
                                    <p className={styles['footer__contact-info-para']}>free@infoexample.com</p>
                                    <p className={styles['footer__contact-info-para']}>www.infoexample.com</p>
                                </div>
                            </div>

                        </div>
                    </Col>
                </Row>
            </Container>
        </div>

        <div className={styles["footer-bootm"]}>
            <Container>
                <p className={styles['footer-bootm-para']}>
                   {t('copyright')} <a href="#" className={styles['footer-bootm-link']}>Colorlib</a>
                </p>
            </Container>
        </div>
    </footer>
  )
}

export default Footer