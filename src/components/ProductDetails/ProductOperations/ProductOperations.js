import React from 'react'
import { Container } from 'react-bootstrap'
import { NavLink ,Outlet } from 'react-router-dom'
import styles from './ProductOperations.module.css'
// import  './ProductOperations.css'
import { useTranslation } from 'react-i18next'

function ProductOperations() {
  const {t} =useTranslation()
  
//   className={({ isActive }) =>
//   isActive ? activeClassName : undefined
// }

// let activeClassName = "underline";
let activeClassName=styles['active-product-section']
  return (
    <section id={styles['product-operations']}>
        <Container>
            <div className={styles['product-operations__cont']}>
                {/* <NavLink to="Description" className={`${(isActive)=>{isActive &&activeClassName }} ${styles['product-operations__button']}`} 
                >{t('description')}</NavLink> */}
                  <NavLink to="Description" className={ ({ isActive }) =>isActive ? `${styles['product-operations__button']} ${activeClassName}` : `${styles['product-operations__button']}`}>{t('description')}</NavLink>
                  <NavLink to="Specifications" className={ ({ isActive }) =>isActive ? `${styles['product-operations__button']} ${activeClassName}` : `${styles['product-operations__button']}`}>{t('specification')}</NavLink>
                  <NavLink to="Comments" className={ ({ isActive }) =>isActive ? `${styles['product-operations__button']} ${activeClassName}` : `${styles['product-operations__button']}`}>{t('comments')}</NavLink>
                  <NavLink to="Reviews" className={ ({ isActive }) =>isActive ? `${styles['product-operations__button']} ${activeClassName}` : `${styles['product-operations__button']}`}>{t('reviews')}</NavLink>
                {/* <NavLink to="Specifications" className={styles['product-operations__button']} activeclassname={styles['active-product-section']}>{t('specification')}</NavLink>
                <NavLink to="Comments" className={styles['product-operations__button']} activeclassname={styles['active-product-section']}>{t('comments')}</NavLink>
                <NavLink to="Reviews" className={styles['product-operations__button']} activeclassname={styles['active-product-section']}>{t('reviews')}</NavLink> */}
            </div>
            <div className={styles['product-operations__content']}>
                {/* <Outlet/> */}
                <React.Suspense fallback={<span>Loading...</span>}>
                  <Outlet />
                </React.Suspense>
            </div>
        </Container>
    </section>
  )
}

export default ProductOperations