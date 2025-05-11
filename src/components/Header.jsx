import React, { useEffect, useState } from 'react'
import '../css/header.css'
import Modal from './Modal'
import { Link } from 'react-router-dom'
import reactLogo from '../assets/product.png'

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className="header">
                <Link to="/" className="logo"><img src="/vite.svg"></img></Link>
                <Link to="/products" className="logo"><img src={reactLogo}></img></Link>
                <div className="header-right">
                    <button className="button" onClick={() => setIsOpen(true)}>🛒</button>
                    <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} />
                </div>

            </div>
        </>
    )
}

export default Header