import React from 'react'
import styles from './SideNavBar.module.css'
import {ReactComponent as LogOutSideBar} from 'assets/icons/logOutSideBar.svg'
import ProfileImage from 'assets/imgs/profile.png'
import { Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

function SideNavBar() {
    let toggleSideNavBar = (type)=>{
        let sideNavBar= document.querySelector('.js-side-navbar')
        type === 'open'? sideNavBar.classList.add(styles['side-navbar--open']):sideNavBar.classList.remove(styles['side-navbar--open'])
    }
    const {t} =useTranslation()
    return (
        <Navbar className={`${styles["side-navbar"]} js-side-navbar`} >
        <div className={styles["side-navbar__content"]}>
            <div className={styles["side-navbar__profile-cont"]}>
            <NavLink to='/'><img src={ProfileImage} className={styles["side-navbar__profile-img"]} alt="profile picture" /></NavLink>
            <p className={styles["side-navbar__profile-name"]}>Mustafa Ibrahim</p>
            </div>
            
            <ul className={styles["side-navbar__nav-list"]}>
                <li className={`${styles["side-navbar__nav-item"]} ${styles['active']}`}>
                    <NavLink to='/' className={styles["side-navbar__nav-link"]}>{t('home')}</NavLink>
                </li>
                
                <li className={styles["side-navbar__nav-item"]}>
                    <NavLink to='/Shop-Categories' className={styles["side-navbar__nav-link"]}>{t('shop')}</NavLink>
                </li>
                
                <li className={styles["side-navbar__nav-item"]}>
                    <NavLink to='/Login' className={styles["side-navbar__nav-link"]}>{t('login')}</NavLink>
                </li>
                
                <li className={styles["side-navbar__nav-item"]}>
                    <NavLink to='/"Product-Details' className={styles["side-navbar__nav-link"]}>{t('product')}</NavLink>
                </li>
                
                <li className={styles["side-navbar__nav-item"]}>
                    <NavLink to='/contact-us' className={styles["side-navbar__nav-link"]}>{t('contact')}</NavLink>
                </li>
            
            </ul>
            <div className={styles["side-navbar__logOut-cont"]}>
            <button className={styles["side-navbar__logOut"]}>
                <LogOutSideBar className={styles["side-navbar__logOut-icon"]}/>
                {t('log_out')}
            </button>
            </div>
        </div>
        <div className={styles["side-navbar__overlayer"]} onClick={()=>{toggleSideNavBar('close')}}></div>
        </Navbar>
    )
}

export default SideNavBar