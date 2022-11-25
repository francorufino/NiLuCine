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

import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import './ItemListContainer.css';

const ItemListContainer = () => {
  return (
    <div id="itemlistcontainer">
      <p>This is Item list container</p>
      <ItemCount />
    </div>
  );
};

export default ItemListContainer;
