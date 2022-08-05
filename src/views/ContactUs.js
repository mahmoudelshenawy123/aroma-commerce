import React from 'react'
import ContactUsForm from '../components/ContactUs/ContactUsForm'
import PageHeader from '../components/Global/PageHeader/PageHeader'
import { useTranslation } from 'react-i18next'
import {motion} from 'framer-motion'

function ContactUs() {
  const {t} =useTranslation()
  return (
    <motion.div 
    init={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}>
      <PageHeader title={t("contact_us")}/>
      <ContactUsForm title={t('contact_us')}/>
    </motion.div>
  )
}

export default ContactUs