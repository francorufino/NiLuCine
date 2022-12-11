// import React from 'react';
// // import Keyboard from '../../Assets/Images/hotdogbuns.jpeg';

// export const item = [{}];

// const Item = () => {
//   return <div>Item</div>;
// };

// export default Item;

import React from 'react';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';

const Item = ({ item }) => {
  return (
    <section>
      <ul>
        <img src={item.img} />
        <li>{item.name}</li>
        <li>{item.description}</li>
        <li>U$ {item.price}</li>
      </ul>
      {/* <button onClick={<ItemDetailContainer />}>Detail</button> */}
    </section>
  );
};

export default Item;

//how do I use the product price here, but when I dont have a price, in one of the components, I do not show it in the view?
