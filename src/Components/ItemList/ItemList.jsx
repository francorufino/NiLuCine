import React from 'react';
import './ItemList.css';
import Item from '../Item/Item';

const ItemList = ({ products }) => {
  return (
    <div id="itemlist">
      {products.map((product) => {
        return <Item item={product} />;
      })}
    </div>
  );
};

export default ItemList;
