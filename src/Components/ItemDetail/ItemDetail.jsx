import React from 'react';
import Item from '../Item/Item';
import './ItemDetail.css';

const ItemDetail = ({ item }) => {
  console.log(item);
  return (
    <div id="itemdetail">
      <p>This is Item Detail</p>
      <ul className="containerProduct">
        <p>teste</p>
        {item.map((item) => (
          <Item item={item} />
        ))}
      </ul>
    </div>
  );
};

export default ItemDetail;
