import React from "react";
import Star from "../../assets/svg/star.jsx";
import "./Product.scss";

function Product() {
  return (
    <div className="product">
      <div className="product-image">
        <img src="" alt="" />
        <div className="discount">-40%</div>
        <div className="icons">
          <img src="" alt="" />
          <img src="" alt="" />
        </div>
        <button className="product-btn">Add To Cart</button>
      </div>
      <div className="info">
        <h3></h3>
        <div className="prices">
          <p>120</p>
          <p>160</p>
        </div>
        <div className="rating">
          {[1, 2, 3, 4, 5].map((item, index) => (
            <Star key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Product;
