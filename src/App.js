import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Spinner from './components/UI/Spinner/Spinner';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
const Checkout = lazy(()=> import('./containers/Checkout/Checkout'));
const Orders = lazy(()=> import('./containers/Checkout/Orders/Orders'));
const Auth = lazy(()=> './containers/Auth/Auth');
// import ContactData from './containers/Checkout/ContactData/ContactData';
const app = () => {
    let routes = (
            <Routes >
              <Route path='/checkout/*' element={ <Suspense fallback={<Spinner/>} > <Checkout /></Suspense>} />
              <Route path='/orders' element={<Suspense fallback={<Spinner/>}> <Orders /></Suspense>} />
              <Route path='/' index element={<Suspense fallback={<Spinner/>}> <BurgerBuilder /></Suspense>} />
              <Route path="/auth" element={<Suspense fallback={<Spinner/>}> <Auth /></Suspense>}/>
            </Routes>     
    )

    return (
      <>
        <Layout>
          <Suspense fallback={<Spinner/>}>
            {routes}
          </Suspense>
        </Layout>
      </>
    );
  }

export default app;
