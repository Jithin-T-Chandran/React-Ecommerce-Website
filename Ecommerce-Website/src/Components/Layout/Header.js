import React, { Fragment } from "react";
import classes from  "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

function Header(props) {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>My Ecommerce</h1>
        <HeaderCartButton onClick={props.onShowCart}/>
      </header>
    </Fragment>
  );
}

export default Header;