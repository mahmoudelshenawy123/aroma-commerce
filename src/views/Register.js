import React from 'react'
import PageHeader from '../components/Global/PageHeader/PageHeader'
import RegisterComp from '../components/RegisterComp/RegisterComp'
import { useTranslation } from 'react-i18next'
import {motion} from 'framer-motion'

function Register() {
  const {t} =useTranslation()
  return (
    <motion.div 
    init={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}>
        <PageHeader title={t('login_register')}/>
        <RegisterComp/>
    </motion.div>
  )
}

export default Register