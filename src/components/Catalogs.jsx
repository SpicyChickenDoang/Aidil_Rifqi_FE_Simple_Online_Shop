import React from 'react'
import { useState, useEffect } from 'react';
import Card from './Card.jsx';

function Catalogs() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/entries`, {
          method: 'GET',
          headers: { 'ngrok-skip-browser-warning': 'true' }
        });

        const data = await response.json();
        setProducts(data);

      } catch (error) {
        setError(true);
      }
    }

    fetchData();
  }, [])

  if(error == true) {
    return (<div style={{marginTop: '30px', fontSize: '40px'}}>No Items Found!</div>)
  }

  return (
    <>
      <div style={{ display: "flex", gap: "30px", flexWrap: "wrap", marginTop: "30px", justifyContent: "center" }}>
        {
          products.map((e) => {

            let cart = JSON.parse(localStorage.getItem('miniCart')) || [];
            let existingItem = cart.find(item => item.id == e.id);
            let amount = 0
            if (existingItem) {
              amount = existingItem.qty;
            } else {
              amount = 0
            }

            return <Card
              title={e.title}
              description={e.description}
              image={e.images}
              key={e.id}
              id={e.id}
              amount={amount} />
          })
        }
      </div >
    </>
  )
}

export default Catalogs