import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Component import
import About from "./pages/About";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Wrapper from "./pages/Wrapper";
import Product from "./pages/Product";
import Products from "./pages/Products";
import ProductsPage from "./pages/ProductsPage";

// CSS import
import "./App.css";
import meal1 from "./img/meal-1.jpg";
import meal2 from "./img/meal-2.jpg";
import meal3 from "./img/meal-3.jpg";
import meal4 from "./img/meal-4.jpg";
import meal5 from "./img/meal-5.jpg";
import meal6 from "./img/meal-6.jpg";
import meal7 from "./img/meal-7.jpg";
import meal8 from "./img/meal-8.jpg";
import meal9 from "./img/meal-9.jpg";



const productDetails = [
  // id, name, image, price, desc
  {
    id: 1,
    name: "Meal 1",
    image: meal1,
    price: 2300,
    desc: " Lorem ipsum dolor sit amet conse ctetur adipisi cing elit. Dolor cons equuntu",
  },
  {
    id: 2,
    name: "Meal 2",
    image: meal2,
    price: 1800,
    desc: " Lorem ipsum dolor sit amet conse ctetur adipisi cing elit. Dolor cons equuntu",
  },
  {
    id: 3,
    name: "Meal 3",
    image: meal3,
    price: 4100,
    desc: " Lorem ipsum dolor sit amet conse ctetur adipisi cing elit. Dolor cons equuntu",
  },
  {
    id: 4,
    name: "Meal 4",
    image: meal4,
    price: 1500,
    desc: " Lorem ipsum dolor sit amet conse ctetur adipisi cing elit. Dolor cons equuntu",
  },
  {
    id: 5,
    name: "Meal 5",
    image: meal5,
    price: 1150,
    desc: " Lorem ipsum dolor sit amet conse ctetur adipisi cing elit. Dolor cons equuntu",
  },
  {
    id: 6,
    name: "Meal 6",
    image: meal6,
    price: 2100,
    desc: " Lorem ipsum dolor sit amet conse ctetur adipisi cing elit. Dolor cons equuntu",
  },
  {
    id: 7,
    name: "Meal 7",
    image: meal7,
    price: 2500,
    desc: " Lorem ipsum dolor sit amet conse ctetur adipisi cing elit. Dolor cons equuntu",
  },
  {
    id: 8,
    name: "Meal 8",
    image: meal8,
    price: 2300,
    desc: " Lorem ipsum dolor sit amet conse ctetur adipisi cing elit. Dolor cons equuntu",
  },
  {
    id: 9,
    name: "Meal 9",
    image: meal9,
    price: 1000,
    desc: " Lorem ipsum dolor sit amet conse ctetur adipisi cing elit. Dolor cons equuntu",
  },
];




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Wrapper />}>
          <Route index element={<Home items = {productDetails} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<ProductsPage />}>
            <Route index element={<Products items = {productDetails} />} />
            <Route
              path="/products/:productId"
              element={<Product items ={productDetails}  />}
            />
          </Route>
          <Route path={"*"} element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
