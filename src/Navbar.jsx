import React from 'react'
import {HiShoppingCart} from 'react-icons/hi'
function NavBar({cartNum}){
    return(
        <div className='navBar'>
            <a><h2>Rayons Record store</h2></a>
       
       < a className="cart-items">
        <HiShoppingCart style={{ marginLeft: 10 }} />
        <div className="cart-num">{cartNum}</div>
      </a>
       </div>
    )
}

export default NavBar