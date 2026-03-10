import { useState } from "react";
import '../styling/navbar.css'

export default function Navbar() {
 

  return(
    <div className="navbar">
        <div className="logo">My Store</div>

      <div className="nav-links">
        <a href="/">Home</a>
        <a href="/products">Products</a>
        <a href="/cart">Cart</a>
      </div>

    </div>

)}