import React from "react";
import { useContext } from 'react';
import CartContext from "../store/cart-context";

const Card = (props) => {
  const { title, author, price, img ,amount} = props;
  const cartCtx = useContext(CartContext);

  const ClickHandler = () => {
    cartCtx.addItem({
      id: props.id,
      title: props.title,
      author:props.author,
      price:props.price,
      img:props.img,
      amount:props.amount
    });
  };
  return (
    <div className="cards">
      <div className="image_box">
        <img src={img} alt="" />
      </div>
      <div className="details">
        <p>{title}</p>
        <p>{author}</p>
        <p>Price - {price}Rs</p>
        <button onClick={ClickHandler}>Add to Cart</button>
      </div>
    </div> 
  );
};

export default Card;