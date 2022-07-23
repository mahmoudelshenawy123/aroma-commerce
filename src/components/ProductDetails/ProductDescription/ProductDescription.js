import React from 'react'
import styles from './ProductDescription.module.css'
import { useTranslation } from 'react-i18next'

function ProductDescription() {
  const {t} =useTranslation()
  return (
    <>
        <p className={styles['product-operations-para']}>{t('beryl')}</p>
        <p className={styles['product-operations-para']}>{t('frausting')}</p>
    </>
  )
}

export default ProductDescription