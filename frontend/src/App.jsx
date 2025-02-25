import React from 'react'
import Home from './pages/Home/Home'
import { Routes, Route } from 'react-router-dom'
import ProductModel from './components/ProductModel/ProductModel'


const App = () => {
  return (
    <div className='app'>
      <Routes>
        <Route path='/' element ={<Home/>}/>
        <Route path='/product/:id' element ={<ProductModel/>}/> 
      </Routes>
       
    </div>
  )
}

export default App
