import React, { useState } from 'react';
import { useEffect } from 'react';
import './ItemCount.css';

function ItemCount() {
  const stock = 5;
  const [click, setClick] = useState(0);

  useEffect(() => {
    if (click >= stock) {
      const greater = document.getElementById('btnAddCart');
      greater.classList.add('disable');
    }
  }, [click]);

  return (
    <div>
      <p>Number of clicks: {click}</p>
      <button id="btnAddCart" onClick={() => setClick(click + 1)}>
        Add to cart
      </button>
    </div>
  );
}

export default ItemCount;
