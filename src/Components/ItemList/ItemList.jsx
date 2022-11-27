import React from 'react';
import Item from '../Item/Item';

const ItemList = ({ products }) => {
  return (
    <ul className="containerProduct">
      {products.map((product) => (
        <Item product={product} />
      ))}
    </ul>
  );
};

export default ItemList;

// import React from 'react';
// import './GreetingItemListContainer.css';

// const GreetingItemListContainer = (props) => {
//   return <h1>Hello {props.greeting}</h1>;
// };

// export default GreetingItemListContainer;
