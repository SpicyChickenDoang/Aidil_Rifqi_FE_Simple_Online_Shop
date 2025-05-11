import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';

function NewProduct({ isOpen, onClose }) {
    if (!isOpen) return null;

    const [inputs, setInputs] = useState({
        title: '',
        desc: '',
        sku: '',
        qty: 0,
        images: []
    });

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleFileChange = (e) => {
        setInputs((prev) => ({
            ...prev,
            images: Array.from(e.target.files)
        }));
    };

    async function submitProduct(e) {
        e.preventDefault();

        const formData = new FormData();

        formData.append('title', inputs.title);
        formData.append('description', inputs.desc);
        formData.append('sku', inputs.sku);
        formData.append('qty', inputs.qty);

        for (let i = 0; i < inputs.images.length; i++) {
            formData.append('images', inputs.images[i]);
        }

        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/entries`, {
            method: 'POST',
            body: formData
        });

        const result = await response.json();

        Navigate("/products");
    }

    return (<>
        <div className="modal-backdrop">
            <div className="modal2">
                <form onSubmit={submitProduct} className="product-form" encType="multipart/form-data">
                    <input
                        type="text"
                        placeholder="Title"
                        name="title"
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Description"
                        name="desc"
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        placeholder="SKU"
                        name="sku"
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="number"
                        placeholder="Quantity"
                        name="qty"
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="file"
                        name="images"
                        accept="image/*"
                        multiple
                        onChange={handleFileChange}
                    />
                    <button type="submit">Submit</button>
                    <div>
                        <button className="close-button" onClick={onClose}>Cancel</button>
                    </div>
                </form>

            </div>
        </div >
    </>
    );

}

export default NewProduct