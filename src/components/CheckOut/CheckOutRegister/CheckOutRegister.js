import React from 'react'
import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'
import styles from './CheckOutRegister.module.css'
function CheckOutRegister() {
    const {t} =useTranslation()
  return (
    <section className={styles['check-out__register']}>
        <div className={styles['check-out__register-title-cont']}>
            <h2 className={styles['check-out__register-title']}>{t('returning_customer')}  
                 <NavLink to='/Login' className={styles['check-out__register-login']}> {t('click_here_to_login')}</NavLink></h2>
        </div>
            <div className={styles['check-out__register-content']}>
                <p className={styles['check-out__register-desc']}>
                    {t('check_out_login_desc')}
                </p>
                <form>
                    <div className={styles['check-out__register-input-cont']}>
                        <input type="text" placeholder={t('username_or_email')} className={styles['check-out__register-input']}/>
                        <input type="password" placeholder={t('password')} className={styles['check-out__register-input']}/>
                    </div>
                    <div className={styles['check-out__register-submit-cont']}>
                        <input type='submit' value={t('login')} className={styles['check-out__register-submit']}/>
                        <input type='checkbox' id={styles['check-out__register-remeber']} />
                        <label htmlFor={styles['check-out__register-remeber']}>{t('remember_me')}</label>
                    </div>
                    <NavLink to='/forget' className={styles['check-out__register-forget']}>{t('forgot_password?')}</NavLink>
                </form>
            </div>
    </section>
  )
}

export default CheckOutRegister