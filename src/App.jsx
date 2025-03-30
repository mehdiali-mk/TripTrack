import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Homepage from "./pages/Homepage.jsx";
import Product from "./pages/Product.jsx";
import Pricing from "./pages/Pricing.jsx";
import Login from "./pages/Login.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";
import AppLayout from "./pages/AppLayout.jsx";
import CityLists from "./Components/CityLists.jsx";
import CountryList from "./Components/CountryList.jsx";
import City from "./Components/City.jsx";
import Form from "./Components/Form.jsx";
import { CityProvider } from "./Contexts/CityContext.jsx";

function App() {
  return (
    <CityProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="/product" element={<Product />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/app" element={<AppLayout />}>
            <Route index element={<Navigate replace to="/app/cities" />} />
            <Route path="cities" element={<CityLists />} />
            <Route path="cities/:id" element={<City />} />

            <Route path="countries" element={<CountryList />} />
            <Route path="form" element={<Form />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </CityProvider>
  );
}

export default App;
