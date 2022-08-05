import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import styles from './ContactUsForm.module.css'
import { ReactComponent as HomeIcon} from 'assets/icons/Home.svg'
import { ReactComponent as HeadPhoneIcon} from 'assets/icons/headPhone.svg'
import { ReactComponent as MailIcon} from 'assets/icons/mail.svg'
import axiosConfig from 'features/axiosConfig.js'
import { useTranslation } from 'react-i18next'

function ContactUsForm() {
    const {t} =useTranslation()
    const [contact ,setContactData] =useState({name:'',email:'',subject:'',message:''})
    let updateForm=(event)=>{
        setContactData({...contact,[event.target.name]:event.target.value})
    }
    let submitForm=(event)=>{
        event.preventDefault();
        axiosConfig.post(`/posts`,{contact}).then(res=>{
            console.log(res)
            console.log(res.data)
        }).catch(err=>console.log(err.message))
    }
  return (
    <section id={styles["contact-us"]}>
        <Container>
            <Row >
                <Col lg="3">
                    <div className={styles["contact__info"]}>
                        <HomeIcon className={styles['contact__info-icon']}/>
                        <div className={styles['contact__info-content']}>
                            <p className={styles['contact__info-heading']}>{t('california_united_states')}</p>
                            <p className={styles['contact__info-para']}>{t('santa_monica_bullevard')}</p>
                        </div>
                    </div>
                    <div className={styles["contact__info"]}>
                        <HeadPhoneIcon className={styles['contact__info-icon']}/>
                        <div className={styles['contact__info-content']}>
                            <p className={styles['contact__info-heading']}>00 (440) 9865 562</p>
                            <p className={styles['contact__info-para']}>{t('date')}</p>
                        </div>
                    </div>
                    <div className={styles["contact__info"]}>
                        <MailIcon className={styles['contact__info-icon']}/>
                        <div className={styles['contact__info-content']}>
                            <p className={styles['contact__info-heading']}>support@colorlib.com</p>
                            <p className={styles['contact__info-para']}>{t('send_us_your_query_anytime')}</p>
                        </div>
                    </div>
                </Col>
                <Col lg="9">
                    <form onSubmit={(event)=>{submitForm(event)}}>
                        <Row className={styles["contact__row"]}>
                            <Col lg="6">
                                <div className={styles["contact__input-cont"]}>
                                    <input type='text' onChange={(e)=>{updateForm(e)}}  name='name' placeholder={t('enter_your_name')} value={contact.name} className={styles['contact__input']} required/>
                                    <input type='email' onChange={(e)=>{updateForm(e)}}  name='email' placeholder={t('enter_email_address')} value={contact.email} className={styles['contact__input']} required/>
                                    <input type='text' onChange={(e)=>{updateForm(e)}}  name='subject' placeholder={t('enter_subject')} value={contact.subject} className={styles['contact__input']} required/>
                                </div>
                            </Col>
                            <Col>
                                <textarea name='message'onChange={(e)=>{updateForm(e)}}value={contact.message} className={styles["contact__input-textarea"]} required placeholder={t('enter_message')}></textarea>
                            </Col>
                        </Row>
                        <input type='submit' value={t('send_message')} className={styles["contact__submit"]}/>
                    </form>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default ContactUsForm