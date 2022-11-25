import React, { useState } from 'react';
import { useEffect } from 'react';
import './ItemCount.css';

function ItemCount() {
  const [stock, setStock] = useState(5);
  const [click, setClick] = useState(0);

  useEffect(() => {
    if (stock === 0) {
      const greater = document.getElementById('btnAddCart');
      greater.classList.add('disable');
    }
  }, [click, stock]);

  useEffect(() => {
    if (stock > 0 && click !== 0) {
      setStock(stock - 1);
    }
  }, [click]);

  return (
    <div>
      <p>Number of clicks: {click}</p>
      <p>Stock: {stock}</p>
      <button id="btnAddCart" onClick={() => setClick(click + 1)}>
        Add to cart
      </button>
    </div>
  );
}

export default ItemCount;
