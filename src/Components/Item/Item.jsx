// import React from 'react';
// // import Keyboard from '../../Assets/Images/hotdogbuns.jpeg';

// export const item = [{}];

// const Item = () => {
//   return <div>Item</div>;
// };

// export default Item;

import React from 'react';

const Item = ({ product }) => {
  return (
    <div>
      <img src={product.img} />
      <li>{product.name}</li>
    </div>
  );
};

export default Item;
