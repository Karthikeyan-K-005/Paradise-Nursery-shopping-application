import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css'; // For styling

function LandingPage() {
  return (
    <div className="landing">
      <div className="landing-text">
        <h2>Welcome to GreenHome</h2>
        <p>Your go-to place for beautiful houseplants!</p>
        <Link to="/products">
          <button>Get Started</button>
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;
