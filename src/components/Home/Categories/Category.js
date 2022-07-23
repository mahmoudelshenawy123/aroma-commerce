import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Category.module.css'
function Category(props) {
  let productInfo = props.products
  return (
    <div className={styles["category"]}>
        <NavLink to='Shop-Categories' className={styles['category__link']}></NavLink>
        <img src={productInfo.image} alt={productInfo.name} className={styles['category__img']}/>
        <div className={styles['category_info']}>
            <div className={styles['category_info-content']}>
                <h2 className={styles['category_info-title']}>{productInfo.name}</h2>
                <h3 className={styles['category_info-cat']}>{productInfo.cat}</h3>
            </div>
        </div>
    </div>
  )
}

export default Category