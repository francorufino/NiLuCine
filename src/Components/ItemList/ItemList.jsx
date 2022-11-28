import React from 'react';
import Item from '../Item/Item';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';

const ItemList = ({ products }) => {
  return (
    // <ul className="containerProduct">
    //   {products.map((product) => (
    //     <Item product={product} />
    //   ))}
    // </ul>
    <div>
      <p>This is item list</p>
      <ItemDetailContainer />
    </div>
  );
};

export default ItemList;

// import React from 'react';
// import './GreetingItemListContainer.css';

// const GreetingItemListContainer = (props) => {
//   return <h1>Hello {props.greeting}</h1>;
// };

// export default GreetingItemListContainer;
