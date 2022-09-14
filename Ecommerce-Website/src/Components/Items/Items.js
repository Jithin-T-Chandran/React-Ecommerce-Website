import React from "react";

function Items(props) {
  return (
    <div>
    <h3>{props.title}</h3>
    <input type="image" img src={props.imageUrl} alt="image of songs"/>
    <div className="prod-details">
        <span>$12.99</span>
        <button className="shop-item-button" type='button'>ADD TO CART</button>
    </div>
</div>
  );
}

export default Items;
