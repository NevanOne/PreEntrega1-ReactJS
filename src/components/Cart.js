import React, { Component } from 'react';
import CartWidget from './CartWidget/CartWidget';

class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quantity: 0,
    };
  }

  handleAddToCart = () => {
    this.setState((prevState) => ({
      quantity: prevState.quantity + 1,
    }));
  };

  handleRemoveFromCart = () => {
    this.setState((prevState) => ({
      quantity: prevState.quantity > 0 ? prevState.quantity - 1 : 0,
    }));
  };

  render() {
    return (
      <div>
        <h2>Carrito de Compras</h2>
        <CartWidget quantity={this.state.quantity} />
        <button onClick={this.handleAddToCart}>Agregar al carrito</button>
        <button onClick={this.handleRemoveFromCart}>Quitar del carrito</button>
      </div>
    );
  }
}

export default Cart;
