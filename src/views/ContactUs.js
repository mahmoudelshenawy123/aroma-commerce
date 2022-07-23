import React from 'react'
import ContactUsForm from '../components/ContactUs/ContactUsForm'
import PageHeader from '../components/Global/PageHeader/PageHeader'
import { useTranslation } from 'react-i18next'

function ContactUs() {
  const {t} =useTranslation()
  return (
    <div>
      <PageHeader title={t("contact_us")}/>
      <ContactUsForm title={t('contact_us')}/>
    </div>
  )
}

export default ContactUs