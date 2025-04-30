import { LOGO_URL } from "../utils/constants";
import { LOGIN, LOGOUT } from "../utils/constants";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  console.log("header loaded");
  let btnName = "Login";
  const [btnNameReact, setbtnNameReact] = useState(LOGIN);
  useEffect(() => {}, [btnNameReact]);
  return (
    <div className="flex m-10 justify-between bg-green-100 shadow-lg px-10">
      <div className="logo-container ">
        <img className="w-50" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex">
          <li className="px-4">
            Online Status: {useOnlineStatus() ? "✅" : "🔴"}
          </li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4">Cart</li>
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
          <li className="px-4">
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
