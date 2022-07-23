import React from 'react'
import logo from 'assets/imgs/logo.png'
import {ReactComponent as CartIcon} from 'assets/icons/cart.svg'
import { ReactComponent as SearchIcon } from 'assets/icons/search.svg'
import { ReactComponent as MenuIcon } from 'assets/icons/menu.svg'
import { NavLink } from 'react-router-dom'
import {Container ,Navbar ,Nav,} from 'react-bootstrap'
import styles from './NavbarMenu.module.css'
import styles2 from '../CustomDropdownMenu/CustomDropdownMenu.module.css'
import stylesSideNavBar from '../sideNavBar/SideNavBar.module.css'
import CustomDropdownMenu from '../CustomDropdownMenu/CustomDropdownMenu'
import { useTranslation } from 'react-i18next'
import ChangeLangueList from '../ChangeLangueList/ChangeLangueList'
import {useDispatch ,useSelector} from 'react-redux'
import {addProductToCart ,addProductToFavorite} from 'reduxCont/cart/cartActions'
function NavbarMenu() {
    let toggleSideNavBar = (type)=>{
        let sideNavBar= document.querySelector('.js-side-navbar')
        type === 'open'? sideNavBar.classList.add(stylesSideNavBar['side-navbar--open']):sideNavBar.classList.remove(stylesSideNavBar['side-navbar--open'])
    }
    const {t} =useTranslation()
    // const dispatch = useDispatch()
    const cartItemsCount =useSelector(state=>state.cartItemsCount)
  return (
    <Navbar expand="lg" id={styles["main-navbar"]}fixed="top" >
        <Container>
            <NavLink to="/">
                <img src={logo} alt= 'logo' className={styles['main-navbar__logo']}/>
            </NavLink>
            <button className={styles['main-navbar__toggle-button']} onClick={()=>toggleSideNavBar('open')}>
                <MenuIcon className={styles['main-navbar__toggle-icon']}/>
            </button>
            <Navbar.Collapse>
                <Nav className={`${styles["main-navbar__nav-list"]} mx-auto`}>
                    <NavLink to="/" className={styles['main-navbar__link']} exact={'true'} activeclassname="active">{t('home')}</NavLink>

                    <CustomDropdownMenu linkClass={styles['main-navbar__link']} title={t('shop')} >
                        <li className={styles2["custom-dropdown__item"]}>
                            <NavLink to='/Shop-Categories' className={styles2["custom-dropdown__link"]}>{t('shop_category')}</NavLink>
                        </li>
                        <li className={styles2["custom-dropdown__item"]}>
                            <NavLink to='/Product-Details' className={styles2["custom-dropdown__link"]}>{t('product_details')}</NavLink>
                        </li>
                        <li className={styles2["custom-dropdown__item"]}>
                            <NavLink to='/Check-Out' className={styles2["custom-dropdown__link"]}>{t('product_checkOut')}</NavLink>
                        </li>
                        <li className={styles2["custom-dropdown__item"]}>
                            <NavLink to='/Order-Confirm' className={styles2["custom-dropdown__link"]}>{t('product_confirmation')}</NavLink>
                        </li>
                        <li className={styles2["custom-dropdown__item"]}>
                            <NavLink to='/Cart' className={styles2["custom-dropdown__link"]}>{t('Shopping_cart')}</NavLink>
                        </li>
                    </CustomDropdownMenu>

                    <CustomDropdownMenu linkClass={styles['main-navbar__link']} title={t('pages')} >
                        <li className={styles2["custom-dropdown__item"]}>
                            <NavLink to='/Login' className={styles2["custom-dropdown__link"]}>{t('login')}</NavLink>
                        </li>
                        <li className={styles2["custom-dropdown__item"]}>
                            <NavLink to='/Register' className={styles2["custom-dropdown__link"]}>{t('register')}</NavLink>
                        </li>
                        <li className={styles2["custom-dropdown__item"]}>
                            <NavLink to='/Tracking' className={styles2["custom-dropdown__link"]}>{t('tracking')}</NavLink>
                        </li>
                    </CustomDropdownMenu>
                    <NavLink to="/contact-us" className={styles['main-navbar__link']} activeclassname="active">{t('contact')}</NavLink>
                    <ChangeLangueList/>
                </Nav>
                <Nav className={styles['main-navbar__features']}>
                    <NavLink to='Cart' className={`${styles['main-navbar__feature']} ${styles['navbar__feature--search'] }`}>
                        <SearchIcon className={styles['main-navbar__icon']}/>
                    </NavLink>
                    <NavLink to='Cart' className={`${styles['main-navbar__feature']} ${styles['main-navbar__feature--cart']}`}>
                        <CartIcon className={styles['main-navbar__icon']}/>
                        <span className={styles['main-navbar__feature-cart-count']}>{cartItemsCount}</span>
                    </NavLink>
                    <NavLink to='Register' className={styles['main-navbar__register']}>
                        {t('register')}
                    </NavLink>
                    
                </Nav>

            </Navbar.Collapse>
        </Container>
    </Navbar>
    )
}

export default NavbarMenu