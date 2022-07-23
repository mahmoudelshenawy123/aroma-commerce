import React from 'react'
import PageHeader from '../components/Global/PageHeader/PageHeader'
import TrackingForm from '../components/TrackingForm/TrackingForm'
import { useTranslation } from 'react-i18next'

function Tracking() {
  const {t} =useTranslation()
  return (
    <>
        <PageHeader title={t("order_tracking")}/>
        <TrackingForm/>
    </>
  )
}

export default Tracking