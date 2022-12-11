import React from 'react';
import './Card.css';
{
  /*  */
}

const Card = ({ item }) => {
  return (
    <div className="card">
      <div className="card__body">
        <img className="card__image" src={item.img} />
        <h2 className="card__title">{item.name}</h2>
        <p className="card__description">{item.description}</p>
        <h2>U$ {item.price}</h2>
        <h6>In stock: {item.stock} </h6>
      </div>
      <button className="card__btn">Add to cart</button>
    </div>
  );
};

export default Card;
