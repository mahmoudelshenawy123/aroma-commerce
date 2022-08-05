import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarMenu from './components/Global/mainNavBar/NavbarMenu';
import SideNavBar from './components/Global/sideNavBar/SideNavBar';
import Footer from './components/Global/Footer/Footer';

import { Provider } from 'react-redux'
import store from 'reduxCont/store'
import AnimatedRouts from 'components/Global/AnimatedRouts';
function App() {

  return (
    <Provider store={store}>
      <div className="App">
        <NavbarMenu/>
        <SideNavBar/>
          <AnimatedRouts/>
        <Footer/>
      </div>
    </Provider>

  );
}

export default App;
