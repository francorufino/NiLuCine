import React from 'react';
import Item from '../Item/Item';

const ItemDetail = ({ productsD }) => {
  return (
    <div>
      <p>Eu sou o item detail</p>
      <ul className="containerProduct">
        {productsD.map((productD) => (
          <Item product={productD} />
        ))}
      </ul>
    </div>
  );
};

export default ItemDetail;
