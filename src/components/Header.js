import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { LOGIN, LOGOUT } from "../utils/constants";

const Header = () => {
  let btnName = "Login";
  const [btnNameReact, setbtnNameReact] = useState(LOGIN);
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
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
        </ul>
      </div>
    </div>
  );
};

export default Header;
