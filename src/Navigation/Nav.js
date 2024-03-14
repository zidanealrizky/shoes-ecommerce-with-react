import React from "react";
import "./Nav.css";
import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";

function Nav({ handleInputChange, query }) {
  return (
    <nav>
      <div className="nav-container">
        <input
          onChange={handleInputChange}
          value={query}
          type="text"
          placeholder="Enter your search shoes."
          className="search-input"
        />
      </div>

      <div className="profile-container">
        <a href="#">
          <FiHeart className="nav-icons"></FiHeart>
        </a>
        <a href="#">
          <AiOutlineShoppingCart className="nav-icons" />
        </a>
        <a href="#">
          <AiOutlineUserAdd className="nav-icons" />
        </a>
      </div>
    </nav>
  );
}
export default Nav;
