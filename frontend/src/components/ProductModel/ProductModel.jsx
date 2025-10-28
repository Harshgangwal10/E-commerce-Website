import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../store/cartSlice";
import axios from "axios";
import "./ProductModel.css";
import { getStars } from "../../utils/ratingUtils";

/*
 Product Model component displays detailed product information in a modal view.
 Allows users to select quantity 1 to 5 and add the product to the cart.
 */
const ProductModel = () => {
  const { id } = useParams(); // Get product ID from URL params
  const navigate = useNavigate(); // For navigation back to home
  const dispatch = useDispatch(); 
  const [product, setProduct] = useState(null); // Store fetched product data
  const [loading, setLoading] = useState(true); // Loading state for API call

  // Quantity state for add to cart, limited to 1-5
  const [count, setCount] = useState(1);
  const handleIncrement = () => {
    if (count < 5) {
      setCount(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  // Fetch product details on component mount 
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <>
      <div className="modal-view">
        <div className="modal">
          {loading ? (
            <h2>Loading...</h2>
          ) : (
            <>
              <button className="closebutton" onClick={() => navigate("/")}>
                X
              </button>
              <div className="contain">
                <img src={product.image} alt={product.title} />
                <div className="des">
                  <h2>{product.title}</h2>
                  <h3>{product.category}</h3>
                  <h3>${product.price}</h3>
                  <div className="rating">
                    <h4>Rating:</h4>
                    {getStars(product.rating.rate)}
                  </div>
                  <p>{product.description}</p>
                  <hr />
                  <div className="model-btn">
                    <div className="cartButton">
                      <button className="decrement" onClick={handleDecrement}>
                        {" "}
                        -{" "}
                      </button>
                      <span className="count">{count}</span>
                      <button className="increment" onClick={handleIncrement}>
                        +
                      </button>
                    </div>
                    <div
                      className="AddtoCart"
                      onClick={() =>
                        dispatch(addItemToCart({ ...product, quantity: count }))
                      }
                    >
                      Add to Cart
                    </div>
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

export default ProductModel;
