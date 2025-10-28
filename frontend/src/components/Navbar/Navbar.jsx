import "./Navbar.css";
import BagIcon from "../../assets/bag_icon.png";
import MenuOpen from "../../assets/menu_open.svg";
import MenuClose from "../../assets/menu_close.svg";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Navbar = ({ setSearchValue, setSelectedCategory, cartCount }) => {
  const [categories, setCategories] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/categories")
      .then((res) => setCategories(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="navbar">
      <h1>ShopEasy</h1>
      <div className="navbar-content">
        <div className={`search-bar ${menuOpen ? 'open' : ''}`}>
          <input
            onChange={handleSearchChange}
            type="text"
            placeholder="Search by title"
          />
          <select onChange={handleCategoryChange}>
            <option value="">All Categories</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <div className="bag">
          <div className="menu-toggle" onClick={toggleMenu}>
            <img src={menuOpen ? MenuClose : MenuOpen} alt="Menu" />
          </div>
          <Link to="/cart" className="bagIcon">
            <img src={BagIcon} alt="" />
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
