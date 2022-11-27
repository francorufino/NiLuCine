// import React from 'react';
// // import GreetingItemListContainer from './GreetingItemListContainer';

// // const ItemListContainer = () => {
// //   return <GreetingItemListContainer greeting="Andreza" />;
// // };

// // export default ItemListContainer;
// //aki vai os dados da api q esta na aula de apis

// //ou acho q poderia fazer o consumo da api do movies ja

// import { useEffect, useState } from 'react';
// import ItemList from './GreetingItemListContainer';
// import { item } from '../Mocks/ItemMock/ItemMock';

// const ItemListContainer = () => {
//   const [products, setProducts] = useState([]);
//   useEffect(() => {
//     new Promise((resolve) =>
//       setTimeout(() => {
//         resolve(item);
//       }, 3000),
//     ).then((data) => setProducts(data));
//   }, []);

//   if (products.length === 0) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <div className="h-full">
//       <ItemList products={products} />
//     </div>
//   );
// };

// export default ItemListContainer;

// import React from 'react';
// import './GreetingItemListContainer.css';

// const GreetingItemListContainer = (props) => {
//   return <h1>Hello {props.greeting}</h1>;
// };

// export default GreetingItemListContainer;

import React, { useState } from 'react';
import Item from '../Item/Item';
import ItemCount from '../ItemCount/ItemCount';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css';

const productos = [
  {
    id: '1',
    name: 'Keyboard',
    description: 'Keyboard Description',
    stock: 5,
    img: 'https://m.media-amazon.com/images/I/715XLKbQnFL._AC_SX679_.jpg',
  },
  {
    id: '2',
    name: 'Mouse',
    description: 'Mouse Description',
    stock: 2,
    img: 'https://m.media-amazon.com/images/I/6144nG08-iL._AC_SX679_.jpg',
  },
];

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  const productList = new Promise((resolve) =>
    setTimeout(() => {
      resolve(productos);
    }, 3000),
  );

  productList.then((data) => setProducts(data));

  console.log(products);

  return (
    <div id="itemlistcontainer">
      <p>This is Item list container</p>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
