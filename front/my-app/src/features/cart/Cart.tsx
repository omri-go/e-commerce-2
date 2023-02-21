import React from "react";
import { selectCartItems } from "./cartSlice";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { selectLogged } from "../Login/loginSlice";
import { Outlet, Link } from "react-router-dom";
const Cart = () => {
  const dispatch = useAppDispatch();
  const cart = useAppSelector(selectCartItems || []);
  const logged = useAppSelector(selectLogged || false);
  return (
    <div>
      {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        fill="currentColor"
        className="bi bi-cart-check-fill"
        viewBox="0 0 16 16"
      >
        <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-1.646-7.646-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L8 8.293l2.646-2.647a.5.5 0 0 1 .708.708z" />
      </svg>
      <svg>
        <circle cx="10" cy="20" r="3" fill="red" />
        <ellipse cx="30" cy="30" rx="10" ry="20" />
      </svg> */}
      <h1>Cart</h1>
      {cart.length}
      {cart.map((item, i) => (
        <div key={i}>
          description:{item.description},Price:{item.price},Category:
          {item.category},Amount{item.amount}
        </div>
      ))}
      {logged ? <button>Check out</button> : <Link to="/login">login</Link>}
    </div>
  );
};

export default Cart;
