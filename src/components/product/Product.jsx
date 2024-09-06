import React from "react";
import Star from "../../assets/svg/star.jsx";
import "./Product.scss";
import like from "../../assets/svg/wishlist.svg";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/wishlist/wishSlice.js";
import { addToCart } from "../../redux/cart/cartSlice.js";

function Product({ data }) {
  const dispatch = useDispatch();

  return (
    <div className="product">
      <div className="product-image">
        <img src={data.images[0]} alt="" />
        <div className="discount">-40%</div>
        <div className="icons">
          <img onClick={() => dispatch(addItem(data))} src={like} alt="" />
          <img src="" alt="" />
        </div>
        <button
          onClick={() => dispatch(addToCart(data))}
          className="product-btn"
        >
          Add To Cart
        </button>
      </div>
      <div className="info">
        <h3>{data.title}</h3>
        <div className="prices">
          <p>{data.price}</p>
          <p>160</p>
        </div>
        <div className="rating">
          {[1, 2, 3, 4, 5].map((item, index) => (
            <Star key={index} fill={item <= 4 ? "#FFAD33" : "gray"} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Product;
