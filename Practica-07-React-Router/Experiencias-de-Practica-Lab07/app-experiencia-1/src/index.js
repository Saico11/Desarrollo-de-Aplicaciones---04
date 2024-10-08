import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import Products from './pages/Products';
import FeaturedProducts from './pages/FeaturedProducts';
import NewProducts from './pages/NewProducts';
import Users from './pages/Users';
import UserDetails from './pages/UserDetails';
import { Admin } from './pages/Admin';
import Categories from './pages/Categories';
import Tecnology from './pages/Tecnology';
import Cleaning from './pages/Cleaning';
import ProductDetails from './pages/ProductDetails';
import './index.css';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="products" element={<Products />}>
            <Route path=":productId" element={<ProductDetails />} />
            <Route path="featured" element={<FeaturedProducts />} />
            <Route path="new" element={<NewProducts />} />
          </Route>
          <Route path="users" element={<Users />}>
            <Route path=":userId" element={<UserDetails />} />
            <Route path="admin" element={<Admin/>}/>
          </Route>
          <Route path="categories" element={<Categories />}>
            <Route path="tecnology" element={<Tecnology />} />
            <Route path="cleaning" element={<Cleaning />} />
          </Route>
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
