import './Navbar.css';
import BagIcon from '../../assets/bag_icon.png';


const Navbar = ({ setSearchValue,cartCount }) => {
  
  const handlechange = (e) => {
    setSearchValue(e.target.value);  
    console.log(e.target.value);  
  };

  return (
    <div className='navbar'>
      <h1>My Cart</h1>
      <div className="navbar-content">
        <div className="search-bar">
          <input onChange={handlechange} type="text" placeholder='Search' />
        </div>
        <div className="bag-login">
        <div className='bagIcon'>
          <img src={BagIcon} alt="" />
          {cartCount > 0 && <span className="cart-count">{cartCount}</span>}  
        </div>
        <div className="login">
          <a href="">Login</a>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
