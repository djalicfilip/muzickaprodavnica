import React from "react";
import { Link } from "react-router-dom";
import { BsCartFill } from "react-icons/bs";

function MenuBar({ cartNum, isHome, isShop }) {
  return (
    <div className={isHome === 1 ? "menu-bar" : "menu-else"}>
      <Link to="/" className="link-img-nike">
        <img
          src="https://img.icons8.com/ios/500/music-record.png"
          className={isHome === 1 ? "img-record" : "img-record-else"}
        />
      </Link>
      {isHome === 1 ? <br /> : <></>}

      <Link to="/" className={isHome === 1 ? "txt-record" : "txt-record-else"}>
        Rayons Record Store
      </Link>
      <div
        className={
          isHome === 1 ? "menu-bar-items-div" : "menu-bar-items-div-else"
        }
      >
    
        <Link
          to="/shop"
          className="menu-bar-items"
          style={isShop === 1 ? { color: "#282626", fontWeight:'bold' } : { color: "#282626", fontWeight:'bold' }}
        >
          Shop
        </Link>
      </div>
      {isShop === 1 ? (
        <Link to="/cart" className="cart-items">
          <BsCartFill className="icon-cart" />
          <p className="cart-num">{cartNum}</p>
        </Link>
      ) : (
        <></>
      )}
    </div>
  );
}

export default MenuBar;
