import React from 'react'
import '../css/card.css'

function Card({ image, title, description, id, amount }) {

  const setQty = (e) => {
    const card = e.target.closest(".card");
    const qty = e.target.value;
    updateCart(card, qty, "set");
  }

  const add = (e) => {
    const card = e.target.closest(".card");
    const input = card.querySelector("input[type='number']");
    input.value = Number(input.value) + 1;
    updateCart(card, 1, "add");
  }

  const remove = (e) => {
    const card = e.target.closest(".card");
    const input = card.querySelector("input[type='number']");
    input.value = null;
    updateCart(card, 0, "rm");
  }

  return (
    <div className="card" key={id} id={id}>
      <img id="image" src={`${import.meta.env.VITE_API_BASE_URL}/${image[0]}`} />
      <div className="container">
        <p id="title"><b>{title}</b></p>
        <p id="desc">{description}</p>
      </div>
      <div className='button-actions'>
        <button onClick={add} className='btn-add'>Add</button>
        <button onClick={remove} className='btn-rm'>Remove</button>
        <input onChange={setQty} type="number" defaultValue={amount} style={{ textAlign: 'center' }} />
      </div>
    </div>
  )
}

const updateCart = (card, qty, action) => {
  const id = card.id;
  const title = card.querySelector('#title').innerText;
  const desc = card.querySelector('#desc').innerText;
  const image = card.querySelector('#image').src;

  let cart = JSON.parse(localStorage.getItem('miniCart')) || [];
  const existingItem = cart.find(item => item.id === id);

  if (action == "add") {
    if (existingItem) {
      existingItem.qty += parseInt(qty);
    } else {
      cart.push({ id, qty: 1, desc, title, image });
    }
  } else if (action == "rm") {
    cart = cart.filter(item => item.id !== id);

  } else {
    existingItem.qty = parseInt(qty);
  }

  localStorage.setItem('miniCart', JSON.stringify(cart));
}

export default Card