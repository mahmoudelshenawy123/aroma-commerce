import React from 'react'
import PageHeader from '../components/Global/PageHeader/PageHeader'
import RegisterComp from '../components/RegisterComp/RegisterComp'
import { useTranslation } from 'react-i18next'

function Register() {
  const {t} =useTranslation()
  return (
    <>
        <PageHeader title={t('login_register')}/>
        <RegisterComp/>
    </>
  )
}

export default Register