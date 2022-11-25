import React from 'react';
import './GreetingItemListContainer.css';

const GreetingItemListContainer = (props) => {
  return <h1>Hello {props.greeting}</h1>;
};

export default GreetingItemListContainer;
