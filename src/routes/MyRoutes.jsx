
import React from 'react';
import { BrowserRouter, Routes as ReactDOMRoutes, Route } from 'react-router-dom';
import Home from '../pages/home/home';
import Budget from '../pages/budget/budget';
import Supplier from '../pages/supplier/supplier';

const MyRoutes = () => {
  return (
    <BrowserRouter>
      <ReactDOMRoutes>
        <Route exact path="/" element={<Home />} />
        <Route path="/budget" element={<Budget />} />
        <Route path="/supplier" element={<Supplier />} />
      </ReactDOMRoutes>
    </BrowserRouter>
  );
};

export default MyRoutes;
