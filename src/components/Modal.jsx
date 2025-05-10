import React, { useState, useEffect } from 'react';
import '../css/card.css';
import { Link } from 'react-router-dom';
import List from './List';

function Modal({ isOpen, onClose, cartItems }) {
    if (!isOpen) return null;

    const [miniCart, setMiniCart] = useState([]);

    useEffect(() => {
        const cart = JSON.parse(localStorage.getItem('miniCart')) || [];
        setMiniCart(cart)
    }, [])

    return (<>
        <div className="modal-backdrop" onClick={onClose}>
            <div className="modal" style={{ "overflow": "scroll" }}>
                <button onClick={onClose}>X</button>
                <h1>Cart</h1>
                {miniCart.length === 0 ? (
                    <p>Cart is empty</p>
                ) : (
                    <List />
                )}
                <Link to="/checkout" className="checkout" style={{fontSize: '20px'}}>Checkout</Link>
            </div>
        </div >
    </>
    );

}

export default Modal