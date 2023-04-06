import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import './CartWidget.css';

const CartWidget = ({ quantity }) => {
  return (
    <div className="cart-widget">
      <FaShoppingCart className="cart-icon" />
      {quantity > 0 && <div className="cart-notification">{quantity}</div>}
    </div>
  );
};

export default CartWidget;
