import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import NewsArtical from '../NewsArtical/NewsArtical'
import ProductSectionHeading from 'components/Global/ProductSectionHeading/ProductSectionHeading'
// import styles from './News.module.css'
import { useTranslation } from 'react-i18next'

function News() {
    const {t} =useTranslation()
    let articles=[
        {id:1,creater:'Admin',image:'https://i.ibb.co/PNCGNtH/article1.webp',commentsCount:3,title:t['richland_center'],desc:t('let_one_fift')},
        {id:2,creater:'User',image:'https://i.ibb.co/jTp2DNJ/article2.webp',commentsCount:5,title:t['richland_center'],desc:t('let_one_fift')},
        {id:3,creater:'Ali',image:'https://i.ibb.co/3MRtjQ8/article3.webp',commentsCount:13,title:t['richland_center'],desc:t('let_one_fift')},
    ]
  return (
    <section id="news">
        <Container>
            <ProductSectionHeading desc={t('popular_item_in_the_market')} title={t('latest')} spanTitle={t('news')}/>
            <Row>
                {
                    articles&&articles.map(article=>(
                        <Col lg='4' md="6" xs="12" className="mx-auto" key={article.id}>
                            <NewsArtical article={article}/>
                        </Col>
                    ))
                }
            </Row>
        </Container>

    </section>
  )
}

export default News