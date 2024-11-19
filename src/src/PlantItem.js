import React, { useState } from 'react';

function PlantItem({ plant, addToCart }) {
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(plant);
    setIsAdded(true);
  };

  return (
    <div className="plant-item">
      <h3>{plant.name}</h3>
      <p>Price: ${plant.price}</p>
      <button onClick={handleAddToCart} disabled={isAdded}>
        {isAdded ? 'Added' : 'Add to Cart'}
      </button>
    </div>
  );
}

export default PlantItem;
