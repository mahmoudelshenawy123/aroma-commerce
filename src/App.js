import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import NavbarMenu from './components/Global/mainNavBar/NavbarMenu';
import SideNavBar from './components/Global/sideNavBar/SideNavBar';
import Footer from './components/Global/Footer/Footer';
import Home from './views/Home';
import ContactUs from './views/ContactUs';
import Login from './views/Login';
import Register from './views/Register';
import Tracking from './views/Tracking';
import ShopCategories from './views/ShopCategories';
import ProductDetails from './views/ProductDetails';
import ProductDescription from './components/ProductDetails/ProductDescription/ProductDescription';
import ProductSpecification from './components/ProductDetails/ProductSpecification/ProductSpecification';
import ProductComments from './components/ProductDetails/ProductComments/ProductComments';
import Cart from './views/Cart';
import OrderConfirmation from './views/OrderConfirmation';
import CheckOut from './views/CheckOut';
import { Provider } from 'react-redux'
import store from 'reduxCont/store'
// const currentLan
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <NavbarMenu/>
        <SideNavBar/>
        <Routes>
            <Route path='/' element={<Home />}></Route>
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
        <Footer/>
      </div>
    </Provider>
  );
}

export default App;
