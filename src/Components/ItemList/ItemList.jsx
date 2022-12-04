import React from 'react';
import './ItemList.css';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';

const ItemList = ({ products }) => {
  return (
    <div id="itemlist">
      <p>This is item list</p>
      <ItemDetailContainer products={products} />
    </div>
  );
};

export default ItemList;
