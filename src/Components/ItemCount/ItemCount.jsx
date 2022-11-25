import React, { useState } from 'react';
import './ItemCount.css';

function ItemCount() {
  const stock = 5;
  const [click, setClick] = useState(0);

  function newClick() {
    if (click >= stock) {
      const boton = document.getElementById('btnAddCart');
      boton.classList.add('disable');
    } else {
      setClick(click + 1);
    }
  }

  return (
    <div>
      <p>Number of clicks: {click}</p>
      <button id="btnAddCart" onClick={newClick}>
        Add to cart
      </button>
    </div>
  );
}

export default ItemCount;
