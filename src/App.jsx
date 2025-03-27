import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Homepage from "./pages/Homepage.jsx";
import Product from "./pages/Product.jsx";
import Pricing from "./pages/Pricing.jsx";
import Login from "./pages/Login.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";
import AppLayout from "./pages/AppLayout.jsx";
import CityLists from "./Components/CityLists.jsx";
import { useEffect, useState } from "react";

const BASE_URL = "http://localhost:8088";

function App() {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(function () {
    async function fetchCities() {
      try {
        setIsLoading(true);
        console.log(`${BASE_URL}/cities`);
        const response = await fetch(`${BASE_URL}/cities`);
        const data = await response.json();
        setCities(data);
      } catch (err) {
        alert("Error while fetching data: ", err);
      } finally {
        setIsLoading(false);
      }
    }

    fetchCities();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="/product" element={<Product />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/app" element={<AppLayout />}>
          <Route index element={<Navigate to="/app/cities" />} />
          <Route
            path="cities"
            element={<CityLists cities={cities} isLoading={isLoading} />}
          />
          <Route path="countries" element={<CityLists />} />
          <Route path="form" element={<p>My New Form</p>} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
