import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import Orders from './containers/Checkout/Orders/Orders';
// import ContactData from './containers/Checkout/ContactData/ContactData';
class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Routes >
            <Route path='/checkout/*' element={<Checkout />} />
            <Route path='/orders' element={<Orders/>} />
            <Route path='/' element={<BurgerBuilder />} />
            {/* <Route path="checkout/contact-data" element={<ContactData/>}/> */}
          </Routes>
        </Layout>
      </div>
    );
  }
}

export default App;
