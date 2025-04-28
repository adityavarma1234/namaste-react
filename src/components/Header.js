import { LOGO_URL } from "../utils/constants";
import { LOGIN, LOGOUT } from "../utils/constants";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  console.log("header loaded");
  let btnName = "Login";
  const [btnNameReact, setbtnNameReact] = useState(LOGIN);
  useEffect(() => {}, [btnNameReact]);
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>Cart</li>
          <button
            className="signup-btn"
            onClick={(e) => {
              btnName = LOGOUT;
              if (btnNameReact == LOGIN) {
                setbtnNameReact(LOGOUT);
              } else if (btnNameReact == LOGOUT) {
                setbtnNameReact(LOGIN);
              }
            }}
          >
            {btnNameReact}
          </button>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
