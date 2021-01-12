import React from "react";
import './navbar.css';

function Navbar(){
    return (
    <div class="header">
  <a href="#default" class="logo">Physics</a>
  <div class="header-right">
    <a class="active" href="#home">Home</a>
    <a href="#contact">Contact</a>
    <a href="#about">About</a>
  </div>
</div>
        
    )
}
export default Navbar;