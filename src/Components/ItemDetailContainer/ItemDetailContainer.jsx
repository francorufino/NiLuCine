import React, { useState, useEffect } from 'react';
import './ItemDetailContainer.css';
import ItemDetail from '../ItemDetail/ItemDetail';
import { item } from '../../Mocks/ItemMock/ItemMock';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
  const [itemDC, setItemDC] = useState(null);

  const { id } = useParams();

  // useEffect(() => {
  //   fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
  //     .then((data) => data.json())
  //     .then((data) => setPokemonList(data.results));
  // }, []);

  useEffect(() => {
    new Promise((resolve, reject) =>
      setTimeout(() => {
        resolve(item);
      }, 1000),
    ).then((data) => {
      const item = data.find((item) => item.id === id);
      setItemDC(item);
    });
  }, []);

  if (!itemDC) {
    return <p>Loading ItemDetailContainer...</p>;
  }

  return (
    <div id="itemdetailcontainer">
      <ItemDetail item={itemDC} />
    </div>
  );
};

export default ItemDetailContainer;

// import React, { useState } from 'react';
// import ItemList from '../ItemList/ItemList';
// import './ItemListContainer.css';
// import { item } from '../../Mocks/ItemMock/ItemMock';
// import { useEffect } from 'react';
// import { useParams } from 'react-router-dom';

// const ItemListContainer = () => {
//   const { category } = useParams();
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     new Promise((resolve) =>
//       setTimeout(() => {
//         resolve(item);
//       }, 1000),
//     ).then((data) => {
//       //fazer um ternario aqui:
//       if (category) {
//         const categories = data.filter(
//           (product) => product.category === category,
//         );
//         setProducts(categories);
//       } else {
//         setProducts(data);
//       }
//     });
//   }, [category]);

//   if (products.length === 0) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <div id="itemlistcontainer">
//       <p>This is Item list container</p>
//       <ItemList products={products} />
//     </div>
//   );
// };

// export default ItemListContainer;
