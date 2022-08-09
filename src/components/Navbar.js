import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <section className="nav-container">
         <div className="nav-logo">
            <h1 className="logo">GaliTo<span>Gali</span></h1>
         </div>
         <div className="nav-buttons">
            <a className="btns" href="#">Home</a>
            <a className="btns" href="#">Dashboard</a>
            <a className="btns" href="#">Explore</a>
            <a className="btns" href="#">Your Activity</a>
            <button className="login">Login</button>
            <button className="signup">Sign Up</button>
         </div>
      </section>
    </>
  );
};

export default Navbar;
