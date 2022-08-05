import React from 'react'
import { Route, Routes ,useLocation } from 'react-router-dom';

import Home from 'views/Home';
import ContactUs from 'views/ContactUs';
import Login from 'views/Login';
import Register from 'views/Register';
import Tracking from 'views/Tracking';
import ShopCategories from 'views/ShopCategories';
import ProductDetails from 'views/ProductDetails';
import ProductDescription from 'components/ProductDetails/ProductDescription/ProductDescription';
import ProductSpecification from 'components/ProductDetails/ProductSpecification/ProductSpecification';
import ProductComments from 'components/ProductDetails/ProductComments/ProductComments';
import Cart from 'views/Cart';
import OrderConfirmation from 'views/OrderConfirmation';
import CheckOut from 'views/CheckOut';

import {AnimatePresence} from 'framer-motion'
function AnimatedRouts() {
    const location =useLocation()
  return (
    <AnimatePresence>

        <Routes location={location} key={location.pathname}>
            <Route exact path='/' element={<Home />}></Route>
            <Route path='contact-us' element={<ContactUs />}></Route>
            <Route path="Login" element={<Login />}></Route>
            <Route path="Register" element={<Register />}></Route>
            <Route path="Tracking" element={<Tracking />}></Route>
            <Route path="Shop-Categories" element={<ShopCategories />}></Route>
            <Route path="Product-Details" element={<ProductDetails />}>
                <Route index element={<ProductDescription/>}></Route>
                <Route path='Description' element={<ProductDescription/>}></Route>
                <Route path='Specifications' element={<ProductSpecification/>}></Route>
                <Route path='Comments' element={<ProductComments/>}></Route>
            </Route>
            <Route path="Cart" element={<Cart />}></Route>
            <Route path="Check-Out" element={<CheckOut />}></Route>
            <Route path="Order-Confirm" element={<OrderConfirmation />}></Route>
        </Routes>
    </AnimatePresence>

  )
}

export default AnimatedRouts