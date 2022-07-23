import React from 'react'
import PageHeader from '../components/Global/PageHeader/PageHeader'
import SubScribe from '../components/Home/SubScribe/SubScribe'
import ShopCategoriesComp from '../components/ShopCategoriesComp/ShopCategoriesComp'
import { useTranslation } from 'react-i18next'

function ShopCategories() {
  const {t} =useTranslation()
  return (
    <>
        <PageHeader title={t("shop_categories")}/>
        <ShopCategoriesComp/>
        <SubScribe/>
    </>
  )
}

export default ShopCategories