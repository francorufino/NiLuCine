import React from 'react';

const ItemList = (props) => {
  return (
    <div>
      <p>Book Title: {props.name} </p>
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
