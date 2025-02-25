import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import './ProductModel.css'


const ProductModal = () => {
  const { id } = useParams(); 
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const [count ,setCount] =useState(0);
  const handleIncrement = () => {
    setCount(count + 1);
  };


  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [id]);

  return (
   <>
 
    <div className="modal-view">
   
      <div className="modal">
        {loading ? <h2>Loading...</h2> : (
          <>
            <button className="closebutton" onClick={() => navigate("/")}>X</button>
            <div className="contain">
            <img src={product.image} alt={product.title} />
            <div className="des">
            <h2>{product.title}</h2>
            <h3>{product.category}</h3>
            <h3>${product.price}</h3>
            <p>{product.description}</p>
            <hr />
            <div className='model-btn'>
              <div className="cartButton">
              <button className="decrement" onClick={handleDecrement}> - </button>
              <span className="count">{count}</span>
              <button className="increment" onClick={handleIncrement}>+</button>
              </div>
            <div className='buynow'>Buy Now</div>
            </div>
            </div>
            </div>
            
          </>
        )}
      </div>
    </div>
    </>
  );
};

export default ProductModal;
