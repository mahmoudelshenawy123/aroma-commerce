import React from 'react'
import styles from './CategoryFIlter.module.css'
import { useTranslation } from 'react-i18next'

function CategoryFIlter() {
    const {t} =useTranslation()
  return (
    <div className={styles['filter']}>
        <div className={styles['filter__header']}>
            <h3 className={styles["filter__header-heading"]}>
                {t('browse_categories')}
            </h3>
        </div>
        <div className={styles['filter__content']}>
            <ul className={styles['filter__content-list']}>
                <li className={styles['filter__content-items']}>
                    <input type='radio' className={styles['filter__content-radio']} name="filter1" id="filter__content-radio11"/>
                    <label className={styles['filter__content-radio-label']} htmlFor="filter__content-radio11">{t('men')} (3600)</label>
                </li>
                <li className={styles['filter__content-items']}>
                    <input type='radio' className={styles['filter__content-radio']} name="filter1" id="filter__content-radio12"/>
                    <label className={styles['filter__content-radio-label']} htmlFor="filter__content-radio12">{t('men')} (3600)</label>
                </li>
                <li className={styles['filter__content-items']}>
                    <input type='radio' className={styles['filter__content-radio']} name="filter1" id="filter__content-radio13"/>
                    <label className={styles['filter__content-radio-label']} htmlFor="filter__content-radio13">{t('men')} (3600)</label>
                </li>
                <li className={styles['filter__content-items']}>
                    <input type='radio' className={styles['filter__content-radio']} name="filter1" id="filter__content-radio14"/>
                    <label className={styles['filter__content-radio-label']} htmlFor="filter__content-radio14">{t('men')} (3600)</label>
                </li>
                <li className={styles['filter__content-items']}>
                    <input type='radio' className={styles['filter__content-radio']} name="filter1" id="filter__content-radio15"/>
                    <label className={styles['filter__content-radio-label']} htmlFor="filter__content-radio15">{t('men')} (3600)</label>
                </li>
                <li className={styles['filter__content-items']}>
                    <input type='radio' className={styles['filter__content-radio']} name="filter1" id="filter__content-radio16"/>
                    <label className={styles['filter__content-radio-label']} htmlFor="filter__content-radio16">{t('men')} (3600)</label>
                </li>
                <li className={styles['filter__content-items']}>
                    <input type='radio' className={styles['filter__content-radio']} name="filter1" id="filter__content-radio17"/>
                    <label className={styles['filter__content-radio-label']} htmlFor="filter__content-radio17">{t('men')} (3600)</label>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default CategoryFIlter