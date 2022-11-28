import React from 'react';
import Item from '../Item/Item';

const ItemDetail = ({ productsD }) => {
  return (
    <div id="itemDetail">
      <p>This is Item Detail</p>
      <ul className="containerProduct">
        {productsD.map((productD) => (
          <Item product={productD} />
        ))}
      </ul>
    </div>
  );
};

export default ItemDetail;
