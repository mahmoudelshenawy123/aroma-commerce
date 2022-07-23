import React from 'react'
import styles from'./ProductSectionHeading.module.css'

function ProductSectionHeading(props) {
  return (
    <>
        <h3 className={styles["trending-products__heading-info"]}>{props.desc}</h3>
        <h2 className={styles["trending-products__heading-title"]}>{props.title} <span className={styles['trending-products__heading-span']}>{props.spanTitle}</span></h2>     
    </>
  )
}

export default ProductSectionHeading