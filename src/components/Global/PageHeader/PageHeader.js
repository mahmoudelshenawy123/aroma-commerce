import React from 'react'
import { Container } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import styles from './PageHeader.module.css'
import { useTranslation } from 'react-i18next'

function PageHeader(props) {
  const {t} =useTranslation()
  return (
    <section id={styles["page-header"]}>
      <Container className={styles["page-header__content-container"]}>
        <div className={styles["page-header__content"]}>
          <h1 className={styles["page-header__content-heading"]}>
            {props.title}
          </h1>
          <p className={styles["page-header__nav-links"]}>
            <NavLink to="/" className={styles["page-header__nav-link"]}>{t('home')} - </NavLink>
            <span className={styles["page-header__nav-page"]}>{props.title}</span>
          </p>
        </div>
      </Container>
    </section>
  )
}

export default PageHeader