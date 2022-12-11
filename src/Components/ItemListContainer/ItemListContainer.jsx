import React, { useState } from 'react';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css';
import { item } from '../../Mocks/ItemMock/ItemMock';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
// }
import { doc, getFirestore } from 'firebase/firestore';

const ItemListContainer = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const lowerCase = category?.toLowerCase();

  // useEffect(() => {
  //   const db = getFirestore();
  //   const itemRef = doc(db, 'items', '82wwa2dOReLZyJk56IaH');

  //   getDoc(itemRef).then((snapshot) => {
  //     if (snapshot.exists()) {
  //       setProducts([{ id: '82wwa2dOReLZyJk56IaH', ...snapshot.data() }]);
  //     }
  //   });
  // }, []);

  useEffect(() => {
    new Promise((resolve) =>
      setTimeout(() => {
        resolve(item);
      }, 1000),
    ).then((data) => {
      //fazer um ternario aqui:
      if (lowerCase) {
        const categories = data.filter(
          (product) => product.category === lowerCase,
        );
        setProducts(categories);
      } else {
        setProducts(data);
      }
    });
  }, [lowerCase]);

  if (products.length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <div id="itemlistcontainer">
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
