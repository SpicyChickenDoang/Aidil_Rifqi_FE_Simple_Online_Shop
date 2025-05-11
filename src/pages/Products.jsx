import React, { useState } from "react";
import Header from "../components/Header";
import ListProducts from "../components/ListProducts";
import NewProduct from "../components/NewProduct";
import '../css/listproducts.css';

function Products() {

    const [isOpen, setIsOpen] = useState(false);

    return (<>
        <Header />
        <ListProducts />
        <button className="button-new" onClick={() => setIsOpen(true)}>New Product</button>
        <NewProduct isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>)

}

export default Products