import React, { useContext } from 'react';
import PlantItem from './PlantItem';
import { CartContext } from '../context/CartContext';

const plants = [
  { id: 1, name: 'Aloe Vera', price: 10, category: 'Easy Care' },
  { id: 2, name: 'Snake Plant', price: 12, category: 'Low Light' },
];

function ProductListing() {
  const { addToCart } = useContext(CartContext);

  return (
    <div>
      <h2>Our Plants</h2>
      <div className="product-list">
        {plants.map(plant => (
          <PlantItem key={plant.id} plant={plant} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}

export default ProductListing;
