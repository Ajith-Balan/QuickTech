import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';

import Home from './pages/home';
import About from './pages/About';
import Contact from './pages/Contact';
import Policy from './pages/Policy';
import Pagenotfound from './pages/Pagenotfound';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

import CategoryProduct from './pages/CategoryProduct';
import SearchResult from './pages/SearchResults';
import ProductDetails from './pages/ProductDetails';
import HelpPage from './pages/HelpPage';
import CategoryPremium from './pages/Premium';
function App() {
  return (
    <>
      <BrowserRouter>
      
        <ToastContainer />
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/free' element={<CategoryProduct />} />
        <Route path='/premium' element={<CategoryPremium />} />

        <Route path='/product/:id' element={<ProductDetails />} />

        <Route path='/search' element={<SearchResult />} />


          
          {/* Private Route Wrapper */}




         
   {/* Private Route Wrapper */}
   

   <Route path='/help' element={<HelpPage />} />

          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/policy' element={<Policy />} />
          <Route path='*' element={<Pagenotfound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
