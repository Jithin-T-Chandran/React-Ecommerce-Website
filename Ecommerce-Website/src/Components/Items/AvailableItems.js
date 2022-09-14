import React from "react";
import Items from "./Items";

const DUMMY_ITEMS = [
  {
    id: 1,
    title: "Colors",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },

  {
    id: 2,
    title: "Black and white Colors",

    price: 50,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },

  {
    id: 3,
    title: "Yellow and Black Colors",

    price: 70,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },

  {
    id: 4,
    title: "Blue Color",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

function AvailableItems() {
  const itemsList = DUMMY_ITEMS.map((item) => (
    <Items
      key={item.id}
      id={item.id}
      title={item.title}
      imageUrl={item.imageUrl}
    />
  ));
  return (
    <section className="container">
      <h2>MUSIC</h2>
      <div id="music-content">
        {itemsList}
        </div>
    </section>
  );
}

export default AvailableItems;
