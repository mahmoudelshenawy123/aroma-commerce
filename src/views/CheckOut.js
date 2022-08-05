import React from 'react'
import PageHeader from '../components/Global/PageHeader/PageHeader'
import { useTranslation } from 'react-i18next'
import {motion} from 'framer-motion'

  
function CheckOut() {
  const {t} =useTranslation()
  return (
    <motion.div 
    init={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}>
        <PageHeader title={t('product_checkOut')}/>

    </motion.div>
  )
}

export default CheckOut