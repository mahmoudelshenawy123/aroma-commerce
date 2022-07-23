import React from 'react'
import { Table } from 'react-bootstrap'
import styles from'./ProductSpecification.module.css'
import { useTranslation } from 'react-i18next'

function ProductSpecification() {
    const {t} =useTranslation()
  return (
    <Table responsive id={styles["product-specification"]}>
        <tbody>
            <tr className={styles['product-specification__row']}>
                <td className={styles['product-specification__cell']}>{t('width')}</td>
                <td className={styles['product-specification__cell']}>128mm</td>
            </tr>
            <tr className={styles['product-specification__row']}>
                <td className={styles['product-specification__cell']}>{t('width')}</td>
                <td className={styles['product-specification__cell']}>128mm</td>
            </tr>
            <tr className={styles['product-specification__row']}>
                <td className={styles['product-specification__cell']}>{t('width')}</td>
                <td className={styles['product-specification__cell']}>128mm</td>
            </tr>
            <tr className={styles['product-specification__row']}>
                <td className={styles['product-specification__cell']}>{t('width')}</td>
                <td className={styles['product-specification__cell']}>128mm</td>
            </tr>
            <tr className={styles['product-specification__row']}>
                <td className={styles['product-specification__cell']}>{t('width')}</td>
                <td className={styles['product-specification__cell']}>128mm</td>
            </tr>
        </tbody>
    </Table>
  )
}

export default ProductSpecification