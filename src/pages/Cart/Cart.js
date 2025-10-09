import React from "react";
import mainPhoto from "../../assets/cart-pic.svg";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../../actions";

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
    <div className="flex justify-between align-center w-full">
      <div className="w-[30%] py-20 h-[100%]">
        <img
          src={mainPhoto}
          alt="Main background"
          className="w-[100%] object-cover"
        />
      </div>


      <div className="border border-black-500 w-[70%]"> 


      <h1 className="text-[32px] font-bold text-[#4B330B] text-center mt-14">Your Cart Details</h1>
      <ul className="flex justify-around align-center mt-10">
        {getGroupedCart().map((item, index) => (
          <li key={index} className="border border-black-300 rounded-xl w-fit px-10 py-5">
            <div className="items-center text-center">
              <div className="flex justify-center align-center mb-5"> 
              <img className="w-[90%] h-[50%]" src={item.url} alt={item.name} />
              </div>
              <div>
                <h3 className="item-name"> {item.name}</h3>
                <p className="item-price">{item.price}$</p>
                <p className="item-quantity">Quantity: {item.quantity}</p>
              </div>
            </div>
            {/* <button
              className="remove-button"
              onClick={() => deleteFromCart(item)}
            >
              x
            </button> */}
          </li>
        ))}
      </ul>
      <div className="grid items-center justify-center text-center mt-10">

        <p className="text-[28px] font-bold">Total Price: {calculateTotalPrice()}$</p>
        <button className="w-[295px] h-[55px] text-[27px] mt-7 border border-[#000000]-5 rounded-xl">Proceed to Checkout</button>
      </div>
    </div>
    </div>
  );
}

export default Cart;
