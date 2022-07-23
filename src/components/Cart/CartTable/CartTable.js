import React, { useRef, useState } from 'react'
import styles from './CartTable.module.css'
import src from 'assets/imgs/product1.jpg'
import { ReactComponent as DownArrow} from 'assets/icons/downArrow.svg'
import { ReactComponent as TopArrow} from 'assets/icons/topArrow.svg'
import { Table } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
function CartTable() {
  const {t} =useTranslation()
  const cartArray =useSelector(state=>state.cartProducts)
  const [productCart ,setProductCart] =useState(cartArray)

  let changeQuantity=(type,id)=>{
    let changeCart = productCart

    let productQunatityInput =document.getElementById(`cartInput${id}`)
    if(type==='increase'){
        changeCart =changeCart.map(pro=>{
        if( pro.id==id ){
          pro.quantity ++
        }
        return pro
      })
      }else if(type==='decrease' && Number(productQunatityInput.value) >1){
        changeCart =changeCart.map(pro=>{
          if( pro.id==id ){
            pro.quantity --
          }
          return pro
        })
      }
      setProductCart(changeCart)

  }
  
  let checkNumber =(id)=>{
    let changeCart =productCart
    let productQunatityInput =document.getElementById(`cartInput${id}`)
    if(!isNaN(productQunatityInput.value%1) &&Number(productQunatityInput.value)>=1){
      changeCart =changeCart.map(pro=>{
      if( pro.id==id ){
        pro.quantity =Number(productQunatityInput.value)
      }
      return pro
    })
    setProductCart(changeCart)
  }

  }

  return (
    <Table responsive borderless className={styles['cart-table']}>
      <thead>
        <tr>
          <th>{t('product')}</th>
          <th>{t('price')}</th>
          <th>{t('quantity')}</th>
          <th>{t('total')}</th>
        </tr>
      </thead>
      <tbody>
        {
          productCart && productCart.map(cart=>(
            <tr key={cart.id}>
              <td>
                <div className={styles['table__product-img-container']}>
                  <img src={cart.image} alt='product' className={styles['table__product-image']}/>
                  <p className={styles['table__product-title']}>{cart.name}</p>
                </div>
              </td>
              <td>
                <p className={styles["table__product-price"]}>
                  ${cart.price}
                </p>
              </td>
              <td>
                <div className={styles['table__product-quantity-cont']}>
                  <input type='text' className={styles['table__product-quantity-input']} id={`cartInput`+cart.id} value={cart.quantity} 
                    onChange={()=>{checkNumber(cart.id)}}/> 

                  <div className={styles['table__product-quantity-input-control-cont']}>

                    <button onClick={()=>{changeQuantity('increase',cart.id)}} 
                    className={`${styles['table__product-quantity-input-control']} ${styles['table__product-quantity-input-control--border']}`}>
                      <TopArrow className={styles['table__product-quantity-icon']}/></button>

                    <button onClick={()=>{changeQuantity('decrease',cart.id)}} className={styles['table__product-quantity-input-control']}>
                      <DownArrow className={styles['table__product-quantity-icon']}/></button>
                  </div>
                </div>
              </td>
              <td>
                <p className={styles["table__product-price"]}>
                  ${cart.price * cart.quantity}
                </p>
              </td>
            </tr>
          ))
        }
      </tbody>
    </Table>
  )
}

export default CartTable