import React from 'react'
import { useState, useEffect } from 'react';

function List() {
    const [miniCart, setMiniCart] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            let cart = JSON.parse(localStorage.getItem('miniCart')) || [];
            setMiniCart(cart);
        }

        fetchData();
    }, [])

    return (
        <>
            {miniCart.length === 0 ? (<p> EMPTY </p>) : (
                <div style={{ backgroundColor: 'beige', marginTop: '40px' }}>
                    {
                        miniCart.map((e, index) => {
                            return <div key={index} className="cart-item">
                                <img src={e.image} alt={e.title} className="cart-item-image" />
                                <div className="cart-item-details">
                                    <p>{e.title}</p>
                                    <p className="cart-item-qty">{e.qty}</p>
                                </div>
                            </div>
                        })
                    }
                </div >
            )}
        </>
    )
}

export default List