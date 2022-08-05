import React from 'react'
import { Container } from 'react-bootstrap'
import { NavLink ,Outlet } from 'react-router-dom'
import styles from './ProductOperations.module.css'
import { useTranslation } from 'react-i18next'

function ProductOperations() {
  const {t} =useTranslation()
let activeClassName=`${styles['active-product-section']} ${styles['product-operations__button']}`
let notActiveClassName=`${styles['product-operations__button']}`
  return (
    <section id={styles['product-operations']}>
        <Container>
            <div className={styles['product-operations__cont']}>
                  <NavLink to="Description"  
                  className={({ isActive }) =>isActive ? `${activeClassName}`:`${notActiveClassName}`}>{t('description')}</NavLink>

                  {/* <NavLink to="Description" className={ ({ isActive }) =>isActive ? `${styles['product-operations__button']} ${activeClassName}` : `${styles['product-operations__button']}`}>{t('description')}</NavLink> */}
                  <NavLink to="Specifications"
                    className={({ isActive }) =>isActive ? `${activeClassName}`:`${notActiveClassName}`}>{t('specification')}</NavLink>

                  <NavLink to="Comments" 
                    className={({ isActive }) =>isActive ? `${activeClassName}`:`${notActiveClassName}`}>{t('comments')}</NavLink>
                  {/* <NavLink to="Reviews" className={ ({ isActive }) =>isActive ? `${styles['product-operations__button']} ${activeClassName}` : `${styles['product-operations__button']}`}>{t('reviews')}</NavLink> */}
            </div>
            <div className={styles['product-operations__content']}>
                <Outlet />
            </div>
        </Container>
    </section>
  )
}

export default ProductOperations