import React, { useState } from 'react'
import { Col, Container,  Row } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import styles from './LoginComp.module.css'
import axiosConfig from 'features/axiosConfig.js'
import { useTranslation } from 'react-i18next'
import loginApi from 'api/login'
    function LoginComp() {
    const {t} =useTranslation()
    const [login,setLogin] =useState({email:'',password:''})
    let updateForm=(event)=>{
        setLogin({...login,[event.target.name]:event.target.value})
    }
    let submitForm=(event)=>{
        event.preventDefault()
        loginApi(login)
    }
  return (
    <section id={styles["login-register"]}>
        <Container>
            <div className={styles['login-register__content']}>
                <Row>
                    <Col lg='6' className={styles['login-register__other-way']}>
                        <div className={styles['login-register__other-container']}>
                            <h3 className={styles['login-register__other-heading']}>{t('new_to_our_website')}</h3>
                            <p className={styles['login-register__other-desc']}>{t('there_are_advances')}</p>
                            <NavLink to='/Register' className={styles['login-register__other-navigate']}>{t('create_an_account')}</NavLink>
                        </div>
                    </Col>
                    <Col lg='6' className={styles['login-register__form']}>
                        <form onSubmit={(event)=>{submitForm(event)}}>
                            <h2 className={styles['login-register__form-heading']}>{t('log_in_to_enter')}</h2>
                            <div className={styles['login-register__form-input-cont']}>
                                <input type='text' className={styles['login-register__form-input']} placeholder={t('username')} name='email' value={login.email} onChange={(event)=>{updateForm(event)}}/>
                            </div>
                            <div className={styles['login-register__form-input-cont']}>
                                <input type='text' className={styles['login-register__form-input']} placeholder={t('password')} name='password' value={login.password} onChange={(event)=>{updateForm(event)}}/>
                            </div>
                            <div className={styles['login-register__form-remeber-cont']}>
                                <input type='checkbox' id={styles['login-register__form-remeber-id']} className={styles['login-register__form-remeber']}/>
                                <label htmlFor={styles["login-register__form-remeber-id"]} className={styles['login-register__form-remeber-label']}>{t('keep_me_logged')}</label>
                            </div>
                            <input type='submit' className={styles['login-register__form-submit']} value={t('log_in')}/>
                        </form>
                        <NavLink to='/forget' className={styles['login-register__form-forget']}>{t('forgot_password?')}</NavLink>
                    </Col>
                </Row>
            </div>
        </Container>
    </section>
  )
}

export default LoginComp