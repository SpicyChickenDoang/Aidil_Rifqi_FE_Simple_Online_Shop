import React, { useState } from 'react';
import List from '../components/List';
import Header from '../components/Header';
import '../css/checkout.css'
import { Link, useNavigate } from 'react-router-dom';

const Checkout = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleBuy = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    setError('');

    const miniCart = JSON.parse(localStorage.getItem('miniCart')) || [];

    const payload = {
      email: email,
      items: miniCart
    };

    const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/checkout`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    const result = await response.json();
    navigate("/");
  };


  return (<>
    <Header />
    <List />
    <div className="email">
      <input type="email" onChange={(e) => setEmail(e.target.value)} name="email" placeholder="Email" />
      <button className="final-checkout" onClick={handleBuy}>Buy</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>

  </>
  )
}

export default Checkout