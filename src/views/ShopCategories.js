import React from 'react'
import PageHeader from '../components/Global/PageHeader/PageHeader'
import SubScribe from '../components/Home/SubScribe/SubScribe'
import ShopCategoriesComp from '../components/ShopCategoriesComp/ShopCategoriesComp'
import { useTranslation } from 'react-i18next'
import {motion} from 'framer-motion'

function ShopCategories() {
  const {t} =useTranslation()
  return (
    <motion.div 
    init={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}>
        <PageHeader title={t("shop_categories")}/>
        <ShopCategoriesComp/>
        <SubScribe/>
    </motion.div>
  )
}

export default ShopCategories