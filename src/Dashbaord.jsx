import React from 'react';
import { Route , Routes } from 'react-router-dom';

//import pages
import Home from './pages/home/Home';
import Orders from './pages/orders/Orders';
import Products from "./pages/product/Products";
import Customers from './pages/customers/Customers';
import Settings from './pages/settings/Settings';
import Profile from './pages/profile/Profile';
import Category from './pages/category/Category';

function Dashbaord() {
  return (
    <div className='w-full h-auto px-7 py-5'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/orders' element={<Orders/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/customers' element={<Customers/>}/>
        <Route path='/settings' element={<Settings/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/categorys' element={<Category/>}/>
      </Routes>
    </div>
  )
}

export default Dashbaord