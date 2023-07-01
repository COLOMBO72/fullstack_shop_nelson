import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Admin from '../pages/Admin';
import Auth from '../pages/Auth';
import Cart from '../pages/Cart';
import ProductPage from '../pages/ProductPage';
import Shop from '../pages/Shop';
import { Context } from '..';

const AppRouter = () => {
  const { user } = React.useContext(Context);
  console.log(user);
  if (user.isAuth === true) {
    return (
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="*" element={<Shop />} />
      </Routes>
    );
  }
  if (user.isAuth === false) {
    return (
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/registration" element={<Auth />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="*" element={<Shop />} />
      </Routes>
    );
  }
};

export default AppRouter;
