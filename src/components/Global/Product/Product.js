import React from 'react'
import styles from './Product.module.css'
import {ReactComponent as CartIcon} from 'assets/icons/cart.svg'
import { ReactComponent as SearchIcon } from 'assets/icons/search.svg'
import { ReactComponent as HeartIcon } from 'assets/icons/heart.svg'
import {  NavLink } from 'react-router-dom'
import {useDispatch ,useSelector} from 'react-redux'
import {addProductToCart ,addProductToFavorite} from 'reduxCont/cart/cartActions'
function Product(props) {
    let productInfo = props.products
    const dispatch = useDispatch()
    let addToCart=()=>{
        let productData= {
            id:productInfo.id,
            price:productInfo.price,
            image:productInfo.image,
            name:productInfo.name,
            quantity:1
        }
        dispatch(addProductToCart(productData))
    }
    // let addToFavorite=()=>{
    //     dispatch(addProductToFavorite())
    // }
  return (
    <div className={styles['product']}>
        <div className={styles['product__img-cont']}>
            <img src={productInfo.image} alt='Product image' className={styles["product__img"]}/>
            <ul className={styles['product__controls']}>
                <li>
                    <button className={styles["product__control"]}>
                        <SearchIcon/>
                    </button>
                </li>
                <li>
                    <button className={styles["product__control"]} onClick={addToCart}>
                        <CartIcon/>
                    </button>
                </li>
                <li>
                    <button className={styles["product__control"]} onClick={()=>{dispatch(addProductToFavorite())}}>
                        <HeartIcon/>
                    </button>
                </li>
            </ul>
        </div>
        <div className={styles['product__info']}>
            <p className={styles['product__info-desc']}>{productInfo.cat}</p>
            <NavLink to={`/Product-Details`} className={styles['product__info-name']}>{productInfo.name}</NavLink>
            <p className={styles['product__info-price']}>$ {productInfo.price}</p>
        </div>
    </div>
  )
}

export default Product