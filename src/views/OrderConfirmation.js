import React from 'react'
import PageHeader from '../components/Global/PageHeader/PageHeader'
import OrderConfirmationComp from '../components/OrderConfirmationComp/OrderConfirmation'
import { useTranslation } from 'react-i18next'

function OrderConfirmation() {
  const {t} =useTranslation()
  return (
    <>
        <PageHeader title={t('order_confirmation')}/>
        <OrderConfirmationComp/>
    </>
  )
}

export default OrderConfirmation