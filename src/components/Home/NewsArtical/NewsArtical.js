import React from 'react'
import styles from './NewsArtical.module.css'
import {ReactComponent as RightIcon} from 'assets/icons/rightArrow.svg'
import {ReactComponent as SmileIcon} from 'assets/icons/smile.svg'

import { useTranslation } from 'react-i18next'

function NewsArtical(props) {
    const {t} =useTranslation()
    let article = props.article
  return (
    <div className={styles['news-artical']}>
        <div className={styles['news-artical__img-cont']}>
            <img src={article.image} alt={article.title} className={styles['news-artical__img']}/>
        </div>
        <div className={styles["news-artical__content"]}>
            <p className={styles['news-artical__content-creater']}>
                {t('by')} {article.creater} <span className={styles['news-artical__comments-count']}><SmileIcon className={styles['news-artical__content-smile']}/>{article.commentsCount} {t('comments')}</span>
            </p>
            <h2 className={styles['news-artical__content-title']}>
                <a href="#" className={styles["news-artical__content-link"]}>{article.title}</a>
            </h2>
            <h3 className={styles['news-artical__content']}>
                {article.desc}
            </h3>
            <a href="#" className={styles['news-artical__content-read-more']}>{t('read_more')} <RightIcon className={styles['news-artical__content-arrow']}/></a>
        </div>
    </div>
  )
}

export default NewsArtical