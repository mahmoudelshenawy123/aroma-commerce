import React from 'react'
import SwiperMultiCarousal from 'components/Global/Swiper/SwiperMultiCarousal';
import Category from './Category';
import { useTranslation } from 'react-i18next'

function Categories() {
  const {t} =useTranslation()
    let products=[
        {id:1,name:t('iphone'),cat:t('accessories_items'),image:'https://i.ibb.co/0V1HWmQ/category.webp'},
        {id:2,name:t('iphone'),cat:t('accessories_items'),image:'https://i.ibb.co/dQXSbKs/category2.webp'},
        {id:3,name:t('iphone'),cat:t('accessories_items'),image:'https://i.ibb.co/Q9KHj9z/category3.webp'},
    ]

  return (
    <SwiperMultiCarousal products={products} comp={<Category/>}/>
)
}

export default Categories