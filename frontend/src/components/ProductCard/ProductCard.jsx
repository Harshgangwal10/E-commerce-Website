import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './ProductCard.css';
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ searchValue ,setCartCount }) => {  
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  

  const getStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<FaStar key={i} color="#FFD700" />);
      } else if (i - rating < 1) {
        stars.push(<FaStarHalfAlt key={i} color="#FFD700" />);
      } else {
        stars.push(<FaRegStar key={i} color="#FFD700" />);
      }
    }
    return stars;
  };

  useEffect(() => {
    setLoading(true);
    axios.get('https://fakestoreapi.com/products')
      .then(res => {
        setData(res.data);
      })
      .catch(error => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  
  const filteredProducts = data.filter(product =>
    product.title.toLowerCase().includes(searchValue.toLowerCase()) || product.category.toLowerCase().includes(searchValue.toLowerCase())  
  );
  const handleAddToCart = () => {
    setCartCount(prevCount => prevCount + 1);  
  };

  return (
    <div className='product-display'>
      {loading && <h2>Loading...</h2>}
      {filteredProducts.length === 0 && !loading && <h2>No Products Found</h2>}
      {filteredProducts.map((product) => (
        <div key={product.id} className="product-card">
          <div onClick={() => navigate(`/product/${product.id}`)} className='img'>
            <img src={product.image} alt={product.title} />
          </div>
          <div className="product-card-des">
            <h4>{product.title}</h4>
            <div className='product-card-price-rating'>
              <h2>${product.price}</h2>
              <h2>{getStars(product.rating.rate)}</h2>
            </div>
            <div onClick={handleAddToCart}className='addToCart'>Add to Cart</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductCard;
