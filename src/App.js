import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
const Checkout = lazy(()=> import('./containers/Checkout/Checkout'));
const Orders = lazy(()=> import('./containers/Checkout/Orders/Orders'));
const Auth = lazy(()=> './containers/Auth/Auth');
// import ContactData from './containers/Checkout/ContactData/ContactData';
const app = () => {
    return (
      <>
        <Layout>
          <Suspense>
            <Routes >
              <Route path='/checkout/*' element={ <Suspense> <Checkout /></Suspense>} />
              <Route path='/orders' element={<Suspense> <Orders /></Suspense>} />
              <Route path='/' index element={<Suspense> <BurgerBuilder /></Suspense>} />
              <Route path="/auth" element={<Suspense> <Auth /></Suspense>}/>
            </Routes>
          </Suspense>
        </Layout>
      </>
    );
  }

export default app;
