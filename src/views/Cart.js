import React from 'react'
import AddCoupon from '../components/Cart/AddCoupon/AddCoupon'
import CartComp from '../components/Cart/CartComp/CartComp'
import CartProcced from '../components/Cart/CartProcced/CartProcced'
import PageHeader from '../components/Global/PageHeader/PageHeader'
// import { useTranslation} from 
import { useTranslation } from 'react-i18next'

function Cart() {
  const {t} =useTranslation()

  return (
    <>
        <PageHeader title={t('Shopping_cart')}/>
        <CartComp/>
        <AddCoupon/>
        <CartProcced/>
    </>
  )
}

export default Cart