import React from 'react'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import Products from '../Pages/Products'
import Header from '../Layout/Header'
import Details from '../Pages/Details'
import Category from '../Pages/Category'
import SideBar from '../Layout/SideBar'

const Routing = () => {
  return (
    <Router>
      <Header />
      <SideBar />
      <Routes>
        <Route path='/' element={<Products />}></Route>
        <Route path='products/:category/details/:id' element={<Details />}></Route>
        <Route path='/products/category/:cat' element={<Category />}></Route>
      </Routes>


    </Router>
  )
}

export default Routing