import React from 'react'
import { Container } from 'react-bootstrap'
import CartTable from '../CartTable/CartTable'
import styles from'./CartComp.module.css'
function CartComp() {
  return (
    <section id={styles['Cart']}>
        <Container>
            <CartTable/>
        </Container>
    </section>
  )
}

export default CartComp