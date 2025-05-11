import React from 'react'
import { useState, useEffect } from 'react';
import Card from './Card.jsx';
import '../css/listproducts.css'

function ListProducts() {
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

    if (error == true) {
        return (<div style={{ marginTop: '30px', fontSize: '40px' }}>No Items Found!</div>)
    }

    return (
        <>
            <div>
                {products.length === 0 ? (<p> EMPTY </p>) : (
                    <div style={{ backgroundColor: 'beige', marginTop: '40px' }}>
                        {
                            products.map((e, index) => {                               
                                return <div key={index} className="cart-item">
                                    <img src={`${import.meta.env.VITE_API_IMAGE_URL}/` + e.images[0]} alt={e.title} className="cart-item-image" />
                                    <div className="cart-item-details">
                                        <p>{e.title} - {e.sku} - {e.description}</p>
                                        <p className="cart-item-qty">{e.quantity}</p>
                                    </div>
                                </div>
                            })
                        }
                    </div >
                )}
            </div >
        </>
    )
}

export default ListProducts