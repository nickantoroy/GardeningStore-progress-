import "./Header.css";
import logo from "../assets/gardening.png";
import { useNavigate } from "react-router-dom";
import SearchBar from "../Search-bar/Search";
function Header() {
  const nav = useNavigate();
  return (
    <>
      <div className="container">
        <div className="container-element">

        <img src={logo} alt="screen-reader text" />
        <h2>Gardening Store</h2>
        </div>
        <div>
          <ul className="list">
            <li onClick={() => nav('/Native-Seeds')}>Native Seeds</li>
            <li onClick={() => nav('/Home-Garden')}>Home Garden</li>
            <li onClick={() => nav('/Gift-Items')}>Gift Items</li>
          </ul>
        </div>
        <div className="login-or-register">
          <button id="custom-button"><h3  onClick={() => {nav('/login-register')}}>Login/Register</h3></button>
        </div>
      </div>
      <div className="search-bar">
        <SearchBar></SearchBar>
      </div>
    </>
  );
}

export default Header;
