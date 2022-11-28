// import React from 'react';

// const ItemDetailContainer = () => {
//   return <div>ItemDetailContainer</div>;
// };

// export default ItemDetailContainer;

// import { useEffect, useState } from 'react';
// import ItemDetail from '../ItemDetail/ItemDetail';

// const itemMock = {
//   id: '1',
//   name: 'Producto',
//   description: 'Descripcion del producto',
//   price: 15000,
//   photo: '../../Assets/Images/hotdogbeeffranks.jpeg',
// };

// const ItemDetailContainer = () => {
//   const [item, setItem] = useState(null);
//   useEffect(() => {
//     new Promise((resolve) =>
//       setTimeout(() => {
//         resolve(itemMock);
//       }, 2000),
//     ).then((data) => setItem(data));
//   }, []);
//   if (!item) {
//     return <p>Loading...</p>;
//   }
//   return <ItemDetail item={item} />;
// };

// export default ItemDetailContainer;

import React, { useState } from 'react';
import './ItemDetailContainer.css';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useEffect } from 'react';

const item = [
  {
    id: '1',
    name: 'kkkkkkkkkk',
    description: 'Keyboard Description',
    price: 500,
    stock: 5,
    img: 'https://m.media-amazon.com/images/I/715XLKbQnFL._AC_SX679_.jpg',
  },
  {
    id: '2',
    name: 'mmmmmmmmmmmm',
    description: 'Mouse Description',
    stock: 2,
    price: 25,
    img: 'https://m.media-amazon.com/images/I/6144nG08-iL._AC_SX679_.jpg',
  },
];

const ItemDetailContainer = () => {
  const [productsD, setProductsD] = useState([]);

  // useEffect(() => {
  //   fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
  //     .then((data) => data.json())
  //     .then((data) => setPokemonList(data.results));
  // }, []);

  useEffect(() => {
    const productDetails = new Promise((resolve, reject) =>
      setTimeout(() => {
        resolve(item);
      }, 4000),
    );

    productDetails.then((data) => setProductsD(data));
  }, [productsD]);

  // console.log(productsD);

  return (
    <div id="itemdetailcontainer">
      <p>This is item detail container</p>
      <p>t-shirt</p>
      <ItemDetail productsD={productsD} />
    </div>
  );
};

export default ItemDetailContainer;
