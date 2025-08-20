import { useState, useEffect } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { Navigate } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Form from "./components/Form";

// Nexted Routes
import AppLayout from "./pages/AppLayout";
import CityList from "./components/CityList";
import CountryList from "./components/CountryList";
import City from "./components/City";
/* Empty Page */
import PageNotFound from "./pages/PageNotFound";
/* Empty Page */

const BASE_URL = "http://localhost:9000";

function App() {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(function () {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();
        setCities(data);
      } catch (error) {
        console.log(error, "Error");
      } finally {
        // finally to set loadig back to false
        setIsLoading(false);
      }
    }

    fetchCities();
  }, []);

  return (
    <div>
      {/* <h1>Hello Dad</h1> */}
      <Routes>
        <Route index element={<Homepage />} />
        {/* OR */}
        {/* <Route path="/" element={<Homepage />} /> */}
        <Route path="/product" element={<Product />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/login" element={<Login />} />

        {/* Nested Routes */}
        <Route path="app" element={<AppLayout />}>
          {/* default route to show */}
          {/* <Route index element={<p>List item</p>} /> */}
          <Route index element={<Navigate replace to="cities" />} />
          <Route
            path="cities"
            element={<CityList cities={cities} isLoading={isLoading} />}
          />

          {/* Using params / storing state in URL */}
          {/*  */}
          <Route path="cities/:id" element={<City />} />

          {/*  */}

          <Route
            path="countries"
            element={<CountryList cities={cities} isLoading={isLoading} />}
          />
          <Route path="form" element={<Form />} />
        </Route>
        {/* Nested Routes */}

        {/* Empty Page */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
