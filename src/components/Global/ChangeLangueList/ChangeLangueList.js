import i18next from 'i18next'
import Cookies from 'js-cookie'
import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import CustomDropdownMenu from '../CustomDropdownMenu/CustomDropdownMenu'
import styles2 from '../CustomDropdownMenu/CustomDropdownMenu.module.css'
import styles from '../mainNavBar/NavbarMenu.module.css'
import { useSelector ,useDispatch} from 'react-redux'
import { changeLanguagee } from 'reduxCont/cart/cartActions'
import { ReactComponent as LangIcon } from 'assets/icons/lang.svg'
function ChangeLangueList() {
    const languages=[
        {
            code:'en',
            name:'english',
            country_code:'gb',
            dir:'ltr'
        },
        {
            code:'fr',
            name:'francais',
            country_code:'fr',
            dir:'ltr'
        },
        {
            code:'ar',
            name:'العربية',
            country_code:'sa',
            dir:'rtl'
        },
    ]
    const {t} =useTranslation()
    const dispatch= useDispatch()
    const currentLanguageCode = Cookies.get('i18next') || 'en'
    const currentLanguage = languages.find(l=> l.code === currentLanguageCode)
    useEffect(()=>{
        document.body.dir=currentLanguage.dir ||'ltr'
    },[currentLanguage])
    let changeLanguage=(code)=>{
        i18next.changeLanguage(code)

        dispatch(changeLanguagee(code))
    }
    const Lang =useSelector(state=>state.lang)
  return (
    <>
        <CustomDropdownMenu linkClass={styles['main-navbar__link']} title={t(`${Lang}`)} >
        
            <li className={styles2["custom-dropdown__item"]}>
                <button className={styles2["custom-dropdown__link"]} onClick={()=>{changeLanguage('ar')}}>العربية</button>
            </li>
            <li className={styles2["custom-dropdown__item"]}>
                <button className={styles2["custom-dropdown__link"]} onClick={()=>{changeLanguage('en')}}>English</button>
            </li>
            <li className={styles2["custom-dropdown__item"]}>
                <button className={styles2["custom-dropdown__link"]} onClick={()=>{changeLanguage('fr')}}>Franais</button>
            </li>
        </CustomDropdownMenu>
    </>
  )
}

export default ChangeLangueList