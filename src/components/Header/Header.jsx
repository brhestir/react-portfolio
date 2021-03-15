import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow bg-body" style={{position: "fixed", top: "0px", width: "100%", zIndex: 1}}>
        <Link className="navbar-brand" to="/">
          Portfolio
        </Link>
        <div>
          <ul className="navbar-nav">
            <li className="nav-item ms-auto">
              <Link
                to="/aboutme"
                className={
                  window.location.pathname === "/" ||
                  window.location.pathname === "/aboutme"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Brian Hestir
              </Link>
            </li>
            <li className="nav-item ms-auto">
              <Link
                to="/portfolio"
                className={
                  window.location.pathname === "/portfolio"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Portfolio
              </Link>
            </li>
            <li className="nav-item ms-auto">
              <Link
                to="/contact"
                className={
                  window.location.pathname === "/contact"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
