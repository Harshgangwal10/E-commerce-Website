import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../store/cartSlice";
import "./ProductCard.css";
import { useNavigate } from "react-router-dom";
import { getStars } from "../../utils/ratingUtils";


 /* 
 Product Card component displays a list of products with search and category filtering.
  Implements localStorage caching to avoid redundant API fetches.
*/
 
const ProductCard = ({ searchValue, selectedCategory }) => {
  const navigate = useNavigate(); // For navigating to product detail page
  const dispatch = useDispatch(); // Redux dispatch for cart actions
  const [loading, setLoading] = useState(false); // Loading state for API calls
  const [data, setData] = useState([]); // Store product data

  useEffect(() => {
    // Check localStorage for cached products
    const cachedProducts = localStorage.getItem("products");
    if (cachedProducts) {
      setData(JSON.parse(cachedProducts));
    } else {
      setLoading(true);
      axios
        .get("https://fakestoreapi.com/products")
        .then((res) => {
          setData(res.data);
          // Cache the products in localStorage
          localStorage.setItem("products", JSON.stringify(res.data));
        })
        .catch((error) => console.log(error))
        .finally(() => setLoading(false));
    }
  }, []);

  const filteredProducts = data.filter((product) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(searchValue.toLowerCase());
    const matchesCategory =
      selectedCategory === "" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });
  const handleAddToCart = (product) => {
    dispatch(addItemToCart(product));
  };

  return (
    <div className="product-display">
      {loading && <h2>Loading...</h2>}
      {filteredProducts.length === 0 && !loading && <h2>No Products Found</h2>}
      {filteredProducts.map((product) => (
        <div key={product.id} className="product-card">
          <div
            onClick={() => navigate(`/product/${product.id}`)}
            className="img"
          >
            <img src={product.image} alt={product.title} />
          </div>
          <div className="product-card-des">
            <h4>{product.title}</h4>
            <div className="product-card-price-rating">
              <h2>${product.price}</h2>
              <h2>{getStars(product.rating.rate)}</h2>
            </div>
            <div onClick={() => handleAddToCart(product)} className="addToCart">
              Add to Cart
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
