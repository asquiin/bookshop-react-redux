import React from "react";
import mainPhoto from "../../assets/cart-pic.svg";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../../actions";
import "./Cart.css";

function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const deleteFromCart = (item) => {
    dispatch(removeFromCart(item));
  };

  const getGroupedCart = () => {
    const groupedCart = cart.reduce((result, item) => {
      if (!result[item.id]) {
        result[item.id] = {
          ...item,
          quantity: 1,
        };
      } else {
        result[item.id].quantity += 1;
      }
      return result;
    }, {});

    return Object.values(groupedCart);
  };

  const calculateTotalPrice = () => {
    let total = 0;
    getGroupedCart().forEach((item) => {
      total += item.price * item.quantity;
    });
    return total;
  };

  return (
    <div className="flex">
      <div className="w-full h-[100%]">
        <img
          src={mainPhoto}
          alt="Main background"
          className="w-[30%] object-cover"
        />
      </div>

      <h1 className="cart-heading">Cart have {cart.length} items</h1>
      <ul className="cart-items">
        {getGroupedCart().map((item, index) => (
          <li key={index} className="cart-item">
            <div className="item-details">
              <img className="item-image" src={item.url} alt={item.name} />
              <div>
                <h3 className="item-name">Item: {item.name}</h3>
                <p className="item-price">Price: {item.price}$</p>
                <p className="item-quantity">Quantity: {item.quantity}</p>
              </div>
            </div>
            <button
              className="remove-button"
              onClick={() => deleteFromCart(item)}
            >
              x
            </button>
          </li>
        ))}
      </ul>
      <div>
        Cart Checkout:
        <p>Total Price: {calculateTotalPrice()}$</p>
      </div>
    </div>
  );
}

export default Cart;
