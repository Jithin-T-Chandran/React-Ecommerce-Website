import React, { Fragment } from "react";
import HeaderCartButton from "./HeaderCartButton";

function Header(props) {
  return (
    <Fragment>
      <header>
        <ul>
          <li>
            <p>HOME</p>
          </li>
          <li>
            <p>STORE</p>
          </li>
          <li>
            <p>ABOUT</p>
          </li>
          <HeaderCartButton/>
        </ul>
        <h1>The Generics</h1>
      </header>
    </Fragment>
  );
}

export default Header;
