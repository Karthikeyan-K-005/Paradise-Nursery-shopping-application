import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

function Header() {
  const { cartItems } = useContext(CartContext);

  return (
    <header>
      <h1>GreenHome</h1>
      <nav>
        <Link to="/products">Shop</Link>
        <Link to="/cart">
          Cart ({cartItems.length})
        </Link>
      </nav>
    </header>
  );
}

export default Header;
