import React from 'react';
import './ItemDetail.css';
import Card from '../CardComponent/Card';

const ItemDetail = ({ item }) => {
  console.log(item);
  return (
    <div className="wrapper">
      <Card item={item} />
    </div>
  );
};

export default ItemDetail;
