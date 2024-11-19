import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

function CartPage() {
  const { cartItems, increaseQuantity, decreaseQuantity, removeFromCart } = useContext(CartContext);

  const totalCost = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {cartItems.map(item => (
            <div key={item.id}>
              <img src={item.thumbnail} alt={item.name} />
              <p>{item.name}</p>
              <p>Price: ${item.price}</p>
              <button onClick={() => increaseQuantity(item.id)}>+</button>
              <span>{item.quantity}</span>
              <button onClick={() => decreaseQuantity(item.id)}>-</button>
              <button onClick={() => removeFromCart(item.id)}>Delete</button>
            </div>
          ))}
          <h3>Total: ${totalCost}</h3>
          <button onClick={() => alert('Checkout Coming Soon!')}>Checkout</button>
          <Link to="/products">
            <button>Continue Shopping</button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default CartPage;
