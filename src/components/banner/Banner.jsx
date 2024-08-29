import React from "react";
import "./Banner.scss";
import Carousel from "react-bootstrap/Carousel";
import bannerImage from "../../assets/image/banner.png";

function Banner() {
  return (
    <div className="banner">
      <div className="banner-sidebar">
        <ul>
          <li>Woman’s Fashion</li>
          <li>Men’s Fashion</li>
          <li>Electronics</li>
          <li>Home & Lifestyle</li>
          <li>Medicine</li>
          <li>Sports & Outdoor</li>
          <li>Baby’s & Toys</li>
          <li>Groceries & Pets</li>
          <li>Health & Beauty</li>
        </ul>
      </div>
      <div className="banner-carousel">
        <Carousel>
          <Carousel.Item>
            <img src={bannerImage} alt="" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={bannerImage} alt="" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={bannerImage} alt="" />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default Banner;
