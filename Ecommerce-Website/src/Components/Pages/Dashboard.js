import React,{useState} from 'react'
import CartProvider from '../../store/CartProvider';
import Cart from '../Cart/Cart';

import Header from '../Layout/Header';
import MainBody from '../MainBody';
import "./Dashboard.css";


function Dashboard() {

  const[cardIsShown,setCardIsShown] = useState(false);

  const showCartHandler = () =>{
    setCardIsShown(true);
  }
  const hideCartHandler = () =>{
    setCardIsShown(false);
  }

  return (
    <CartProvider>
      {cardIsShown && <Cart onClose={hideCartHandler}/>}
        <Header onShowCart={showCartHandler}/>
        <MainBody/>
    </CartProvider>
  )
}

export default Dashboard