import React, { Suspense, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import Header from './components/Header';

const ProductList = lazy(() => import('./components/ProductList'));
const ContactUs = lazy(() => import('./components/ContactUs'));
const CartPage = lazy(() => import('./components/CartPage'));
const LoginPage = lazy(() => import('./components/LoginPage'));
const NotFound = lazy(() => import('./components/NotFound'));
const CategoryProducts = lazy(() => import('./components/CategoryProducts'));
const ProductDetail = lazy(() => import('./components/ProductDetail'));
const CheckoutPage = lazy(() => import('./components/CheckoutPage'));

function App() {
  const location = useLocation();

  const isNotFound = location.pathname === '/404' || location.pathname === '/not-found';

  return (
    <>
      {!isNotFound && <Header />}

      <Suspense fallback={<div style={{ textAlign: 'center' }}>Loading...</div>}>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/category/:category" element={<CategoryProducts />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="*" element={<NotFound />} />
		  <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
