import React, { useState } from "react";
import { useSelector } from "react-redux";
import Navbar from "../../components/Navbar/Navbar";
import ProductCard from "../../components/ProductCard/ProductCard.jsx";
import "./Home.css";
import Footer from "../../components/footer/footer.jsx";

const Home = () => {
  const [searchValue, setSearchValue] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const cartCount = useSelector((state) => state.cart.totalQuantity);

  return (
    <div className="home">
      <Navbar
        setSearchValue={setSearchValue}
        setSelectedCategory={setSelectedCategory}
        cartCount={cartCount}
      />

      <ProductCard
        searchValue={searchValue}
        selectedCategory={selectedCategory}
      />
      <Footer />
    </div>
  );
};

export default Home;
