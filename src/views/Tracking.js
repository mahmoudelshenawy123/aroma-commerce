import React from 'react'
import PageHeader from '../components/Global/PageHeader/PageHeader'
import TrackingForm from '../components/TrackingForm/TrackingForm'
import { useTranslation } from 'react-i18next'
import {motion} from 'framer-motion'

function Tracking() {
  const {t} =useTranslation()
  return (
    <motion.div 
    init={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}>
        <PageHeader title={t("order_tracking")}/>
        <TrackingForm/>
    </motion.div>
  )
}

export default Tracking