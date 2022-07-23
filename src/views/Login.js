import React from 'react'
import PageHeader from '../components/Global/PageHeader/PageHeader'
import LoginComp from '../components/LoginComp/LoginComp'
// import RegisterComp from '../components/RegisterComp/RegisterComp'
import { useTranslation } from 'react-i18next'

function Login() {
  const {t} =useTranslation()
  return (
    <>
        <PageHeader title={t('login_register')}/>
        <LoginComp/>
    </>
  )
}

export default Login