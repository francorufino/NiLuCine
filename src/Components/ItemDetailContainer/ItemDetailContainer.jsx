import React, { useState, useEffect } from 'react';
import './ItemDetailContainer.css';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = ({ products }) => {
  const [itemDC, setItemDC] = useState(null);

  // useEffect(() => {
  //   fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
  //     .then((data) => data.json())
  //     .then((data) => setPokemonList(data.results));
  // }, []);

  useEffect(() => {
    new Promise((resolve, reject) =>
      setTimeout(() => {
        resolve(products);
      }, 4000),
    ).then((data) => setItemDC(data));
  }, []);

  if (!itemDC) {
    return <p>Loading ItemDetailContainer...</p>;
  }

  return (
    <div id="itemdetailcontainer">
      <p>This is item detail container</p>

      <ItemDetail item={itemDC} />
    </div>
  );
};

export default ItemDetailContainer;
