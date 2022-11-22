import { BrowserRouter, Routes, Route } from 'react-router-dom';

import React from 'react';
import OrderPage from '../pages/Orders';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<OrderPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
