import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Category from "./Category/Category";
import Price from "./Price/Price";
import Color from "./Colors/Color";
import "./Sidebar.css";
const Sidebar = ({handleChange}) => {
  return (
    <>
      <section className="sidebar">
        <div className="logo-container">
          <h1>🛒</h1>
        </div>
        <Category handleChange={handleChange} />
        <Price handleChange={handleChange} />
        <Color handleChange={handleChange} />
      </section>
    </>
  );
};

export default Sidebar;
