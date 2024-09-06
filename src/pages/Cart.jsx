import React from "react";
import "./styles/Cart.scss";
import up from "../assets/svg/up.svg";
import down from "../assets/svg/down.svg";
import { useSelector, useDispatch } from "react-redux";
import { incQuantity, decQuantity } from "../redux/cart/cartSlice";

function Cart() {
  const { items } = useSelector((state) => state.carts);

  let a = [11, 45, 4, 10, 8];

  let b = a.reduce((sub, item) => sub + item, 0);

  console.log(b);

  const subTotal = items.reduce(
    (sub, item) => sub + item.price * item.quantity,
    0
  );

  const dispatch = useDispatch();
  return (
    <>
      <div className="pp">
        <p className="p1">Home </p> <p className="p2"> / Cart</p>
      </div>

      <div className="cart-wrapper container">
        {/* TODO: 1 */}
        <div className="title">
          <div className="text">
            <p>Product</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Subtotal</p>
          </div>
        </div>
        {/* TODO: 2 */}
        {items.map((x) => (
          <div className="product-cart">
            <div className="img-title">
              <img src={x.images[0]} alt="" />
              <p>{x.title.slice(0, 18)}</p>
            </div>
            <p>${x.price}</p>
            <div className="textBox">
              <input type="num" value={x.quantity} min="1" max="10" />
              <div className="icons">
                <img
                  onClick={() => dispatch(incQuantity(x.id))}
                  src={up}
                  alt="up"
                  className="up"
                />
                <img
                  onClick={() => dispatch(decQuantity(x.id))}
                  src={down}
                  alt="down"
                  className="down"
                />
              </div>
            </div>

            <p>${x.price * x.quantity}</p>
          </div>
        ))}
      </div>
      <div className="buttons">
        <button className="btnThree">Return to Shop</button>
        <button className="btnFour">Update Cart</button>
      </div>
      <div>${subTotal}</div>
    </>
  );
}

export default Cart;
