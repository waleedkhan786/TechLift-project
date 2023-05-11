import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import { Cube } from "phosphor-react";
import "./navbar.css";

export const Navbar = () => {
  const location = useLocation();

  const navigate = useNavigate()
  let adminemail = sessionStorage.getItem("userEmail")
  const sesionExpire = ()=>{
    sessionStorage.clear()
    navigate("/login")
  }


  return (
    <div className="navbar">
      <div className="links">
        <Link to="/" className={location.pathname === "/" ? "active-link" : ""}>
          Converse
        </Link>
        </div>

       

      <div className="links">
        <Link
          to="/add"
          className={location.pathname === "/add" ? "active-link" : ""}
        >
          Add Product
        </Link>
        <Link
          to="/contact"
          className={location.pathname === "/contact" ? "active-link" : ""}
        >
          Contact Us
        </Link>
        <Link
          to="/allusers"
          className={location.pathname === "/add" ? "active-link" : ""}
        >
          All Users
        </Link>
        {(adminemail)?
<Link onClick={sesionExpire} to="/login"
          className={location.pathname === "/login" ? "active-link" : ""}>Logout</Link>
:
        <div>
        <Link
          to="/signup"
          className={location.pathname === "/signup" ? "active-link" : ""}
        >
          Sign-Up
        </Link>
        <Link
          to="/login"
          className={location.pathname === "/login" ? "active-link" : ""}
        >
          Log-in
        </Link>
        </div>}
        <Link to="/cart" id="cartlink" className={location.pathname === "/cart" ? "active-link" : ""}>
          <ShoppingCart size={32} />
        </Link>

      </div>
    </div>
  );
};