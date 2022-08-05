import React, { useRef, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import styles from './RegisterComp.module.css'
import { useTranslation } from 'react-i18next'
import src from 'assets/icons/loading.gif'
import Tos from 'components/Tos'
import registerApi from 'api/register'
import { useDispatch, useSelector } from 'react-redux'
import {fetchUserData} from 'reduxCont/cart/cartActions'

function RegisterComp() {
    const {t} =useTranslation()
    const submitButton =useRef(null)
    const [loading,setLoading] =useState(false)
    const [register,setRegister] =useState({name:'',email:'',password:'',password_confirmation:''})
    const dispatch = useDispatch()
    const sta =useSelector(state=>state)
    console.log(sta)
    let updateForm=(event)=>{
        setRegister({...register,[event.target.name]:event.target.value})
    }
    // let submitForm=(event)=>{
    //     event.preventDefault()
    //     console.log('adsdasas')
    //     fetchUserData(dispatch)
    // }
    let submitForm= async (event)=>{
        event.preventDefault()
        if(register.password ===register.password_confirmation){
            setLoading(true)
            submitButton.current.disabled = true

            let registerResponse =await registerApi(register)
            
            console.log({registerResponse})
            if(registerResponse.status){
                setLoading(false)
                submitButton.current.disabled = false
            }else{
                setLoading(false)
                submitButton.current.disabled = false
            }
        }else{
            alert('password not equal to confrim pass')
        }
    }
  return (
    <section id={styles["login-register"]}>
        <Container>
            <div className={styles['login-register__content']}>
                <Row>
                    <Col md='6' className={styles['login-register__other-way']}>
                        <div className={styles['login-register__other-container']}>
                            <h3 className={styles['login-register__other-heading']}>{t('already_have_an_account')}</h3>
                            <p className={styles['login-register__other-desc']}>{t('there_are_advances')}</p>
                            <NavLink to='/Login' className={styles['login-register__other-navigate']}>{t('log_in_now')}</NavLink>
                        </div>
                    </Col>
                    <Col md='6' className={styles['login-register__form']}>
                        <form onSubmit={(event)=>{submitForm(event)}}>
                            <h2 className={styles['login-register__form-heading']}>{t('create_an_account')}</h2>
                            <div className={styles['login-register__form-input-cont']}>
                                <input type='text' className={styles['login-register__form-input']}placeholder={t('username')} name='name' onChange={(event)=>{updateForm(event)}} value={register.name}/>
                            </div>
                            <div className={styles['login-register__form-input-cont']}>
                                <input type='email' className={styles['login-register__form-input']}placeholder={t('email_address')} name='email' onChange={(event)=>{updateForm(event)}} value={register.email}/>
                            </div>
                            <div className={styles['login-register__form-input-cont']}>
                                <input type='password' className={styles['login-register__form-input']}placeholder={t('password')} name='password' onChange={(event)=>{updateForm(event)}} value={register.password}/>
                            </div>
                            <div className={styles['login-register__form-input-cont']}>
                                <input type='password' className={styles['login-register__form-input']}placeholder={t('confirm_password')} name='password_confirmation' onChange={(event)=>{updateForm(event)}} value={register.password_confirmation}/>
                            </div>
                            <div className={styles['login-register__form-remeber-cont']}>
                                <input type='checkbox' id={styles['login-register__form-remeber-id']} className={styles['login-register__form-remeber']}/>
                                <label htmlFor={styles["login-register__form-remeber-id"]} className={styles['login-register__form-remeber-label']}>{t('keep_me_logged')}</label>
                            </div>
                            <button type='submit' className={styles['login-register__form-submit']} ref={submitButton}>
                            {
                                loading ?<img src={src} alt="loading" className={styles['loading__icon']}/>: t('register')
                            }
                            </button>
                            
                        </form>
                        {/* <Tos></Tos> */}
                    </Col>
                </Row>
            </div>
        </Container>
    </section>
  )
}

export default RegisterComp