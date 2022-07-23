import React from "react";
import { Link } from "react-router-dom";
// Component import
import "../css/products.css";

// component for eact product
const SingleProduct = ({ productDetails }) => {
  const { id, name, image, desc, price } = productDetails;
  return (
    <div className="single-product">
      <div>
        <img src={image} alt="" />
      </div>
      <div>
        <Link to={`/products/${id}`} id="product-link">
          <h3 className="product-name">{name}</h3>
        </Link>
        <p className="product-desc">{desc}</p>
        <div className="order">
          <p className="product-price">&#8358;{price}</p>
          <button className="order-btn">Order Now</button>
        </div>
      </div>
    </div>
  );
};
const Products = ({ items }) => {
  return (
    <section className="product-section">
      <h2 className="custom-title product-title">
        Our Products <span></span>
      </h2>
      <div className="product-list">
        {items.map((item) => {
          return <SingleProduct productDetails={item} key={item.id} />;
        })}
      </div>
    </section>
  );
};

export default Products;
