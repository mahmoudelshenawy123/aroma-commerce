import React from 'react'
import PageHeader from '../components/Global/PageHeader/PageHeader'
import { useTranslation } from 'react-i18next'

function CheckOut() {
  const {t} =useTranslation()
  return (
    <>
        <PageHeader title={t('product_checkOut')}/>
        
    </>
  )
}

export default CheckOut