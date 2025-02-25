 import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Header from '../../components/Header/Header.jsx';
import ExploreCart from '../../components/ExploreCart/ExploreCart.jsx';
import ProductCard from '../../components/ProductCard/ProductCard.jsx';
import './Home.css';
import Footer from '../../components/footer/footer.jsx'

const Home = () => {
  const [searchValue, setSearchValue] = useState(''); 
  const [cartCount, setCartCount] = useState(0); 

  return (
    <div className='home'>
      <Navbar setSearchValue={setSearchValue}  cartCount={cartCount }/>  
      <Header/>
      <ExploreCart />
      <ProductCard searchValue={searchValue} setCartCount={setCartCount} />  
      <Footer/>
      
    </div>
  );
};

export default Home; 