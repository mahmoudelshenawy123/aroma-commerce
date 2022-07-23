import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import HeaderImg from "assets/imgs/header.jpg"
import styles from './Header.module.css'
import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'

function Header() {
    const {t} =useTranslation()
  return (
    <section id={styles["header"]}>
        <Container>
            <Row>
                <Col sm='6' className=" d-sm-flex d-none">
                    <div className={styles["header__img-cont"]}>
                        <img src={HeaderImg} alt='header' className={styles['header__img']}/>
                    </div>
                </Col>
                <Col sm='6' className="d-flex">
                    <div className={styles["header__info-cont"]}>
                        <h4 className={styles["header__info-title"]}>{t('shop_is_fun')}</h4>
                        <h1 className={styles["header__info-heading"]}>{t('browse_our_premium_product')}</h1>
                        <p className={styles["header__info-desc"]}>{t('us_which_over')}</p>
                        <NavLink to='/Shop-Categories' className={styles["header__open-cat"]}>{t('browse_now')}</NavLink>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Header